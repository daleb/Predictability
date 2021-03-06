class DataController < ApplicationController
  
  def index
    @current_controller = controller_name
    @path = "csv"
    Dir.chdir("public/csv"){
      @answers = Dir.glob("*answer*")
      @answers.sort!.reverse!
   
    }
    @rowcount = @answers.length - 1
    @rowcount = 0 if @rowcount < 0
  end
  
  def download_videos
    @path = "uploads"
    Dir.chdir("public/uploads"){
      @emotions = Dir.glob("*.webm")
      @emotions.sort!.reverse!
    }
    @rowcount = @emotions.length - 1
    @rowcount = 0 if @rowcount < 0    
  end
  
  def download_statement_answers
    @path = "csv"
    Dir.chdir("public/csv"){
      @statements = Dir.glob("*statement_results*")
      @statements << Dir.glob("*survey_results*")
      @statements=@statements.flatten
      @statements.sort!.reverse!
    }
    @rowcount = @statements.length - 1
    @rowcount = 0 if @rowcount < 0    
  end
  
  def get_pairing_details
     @path = "csv"
     Dir.chdir("public/csv"){
      @pairing = Dir.glob("*pairing*")
      @pairing.sort!.reverse!
     }
  end
  
  def download_payments
    @path = "csv"
    Dir.chdir("public/csv"){
      @payments = Dir.glob("*payment_details*")
      @payments.sort!.reverse!
    }
    @rowcount = @payments.length - 1
    @rowcount = 0 if @rowcount < 0
  end
  
  def download_userinfo
    @path = "csv"
    Dir.chdir("public/csv"){
      @user_info = Dir.glob("*user_information*")
      @user_info.sort!.reverse!
    }
    @rowcount = @user_info.length - 1
    @rowcount = 0 if @rowcount < 0
  end
 
end
