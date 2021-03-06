require "csv"
require "sinatra"
require "uuid"
class QuestionsController < ApplicationController
skip_before_action :verify_authenticity_token, :only => :upload
  def index
    @current_controller = controller_name
    @questions =  []
    csv_que = CSV::parse(File.open('public/master/questions.csv', 'r') {|f| f.read })
    fields = csv_que.shift
    @questions = csv_que.collect { |record| Hash[*fields.zip(record).flatten ] }
    @questions = @questions.group_by { |d| d["qid"].to_i }
    $user_data.select{|user| user[:computer_id] == "#{session[:computerid]}"}[0][:status]="Doing Quiz"
  end

  

  def save_quiz_answers
    ### save the quiz answer details
    ques_arr=[]
    answers= params.select{|key,val| key.include?("question")}
    ans_collection = [session[:computerid]] << answers.collect{|ans|ans[1]}
    (1 .. ans_collection.flatten.length - 1).each {|i|ques_arr << "Question_#{i}"}
    file = begin CSV.open("public/csv/quiz_answers_#{$filestamp}.csv", "r") rescue nil end
    if file
     CSV.open("public/csv/quiz_answers_#{$filestamp}.csv", "a+") do |csv|
      csv << ans_collection.flatten  
     end
    else
     CSV.open("public/csv/quiz_answers_#{$filestamp}.csv", "wb") do |csv|
     csv << ["Part ID",ques_arr].flatten
     csv << ans_collection.flatten
    end
    end
    ### save the quiz answer details
    ### perform pairing
    computer_ids= $user_data.collect{|data|data[:computer_id] if data[:computer_id]!="nil"}.shuffle.compact
    $paired_users=computer_ids.each_slice(2).to_a if $paired_users.empty?
    pairing_file = begin CSV.open("public/csv/pairing_details_#{$filestamp}.csv", "r") rescue nil end
    if !pairing_file
      CSV.open("public/csv/pairing_details_#{$filestamp}.csv", "wb") do |csv|
       $paired_users.each do |pair|
         csv << pair  
       end
      end
    end
   
    ###
   $user_data.select{|user| user[:computer_id] == "#{session[:computerid]}"}[0][:status]="Completed Quiz And Waiting"
   redirect_to participant_path(:from=>"quiz")
   # redirect_to statements_path
  end


  def upload
    uuid = UUID.generate
    
    puts params.inspect


    audio_type = params['audio'].content_type.split("/").last

    File.open("public/uploads/#{uuid}.#{audio_type}", "w") { |f| f.write(File.read(params['audio'].tempfile)) }

    video_type = params['video'].content_type.split("/").last


File.open("public/uploads/#{uuid}.#{video_type}", "w") { |f| f.write(File.read(params['video'].tempfile)) }

    
    `ffmpeg -i public/uploads/#{uuid}.webm public/uploads/#{uuid}.mp4`
    `ffmpeg -i public/uploads/#{uuid}.mp4 -i public/uploads/#{uuid}.wav -c:v copy -c:a aac -strict experimental public/videos/#{uuid}.mp4`

    uuid
  end

end
