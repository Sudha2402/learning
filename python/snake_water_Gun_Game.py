import random
#random.random()
#system=int(random.random()*10)%3
#system=random.choice([0,1,2]) #it also works good

import re

# Import the entire module: 
import scoreFile

# Import specific functions:
# from my_module import greet, add_numbers

# Import all functions (wildcard import - generally discouraged): 
# from my_module import *



# Here we can use dictionary also but since such way not defined in other languages

Choices={
    "s":0,
    "w":1,
    "g":2
}



reverseChoice={
    0:"Snake",
    1:"Water",
    2:"Gun"
}



score=0
oldscore=0
# scoredata={}
name=input("Enter your Name:")
# getting old record of score acheived






with open("scoreFile.py","r+") as f:
    data=f.read().lower()
    # print(data.strip("'"))
    # global scoreData
    # scoreData=(data[13:])

    # print(scoreData.strip("'"))
    # scoreData=dict(scoreData)#error
    # scoreData.keys()


# if(name.lower() in data):
# if(data.find(name.lower())):
def end(name, score):
    # First read the current content of the file
    with open("scoreFile.py", "r") as f:
        data = f.read()
    
    if name.lower() in scoreFile.scoreOfUsers:
        print("You are an old player")
        oldscore = scoreFile.userScore(name)
        print(f"Your highest Score Ever was: {oldscore}")
        
        if score > oldscore:
            # Update in memory
            scoreFile.scoreOfUsers[name.lower()] = score
            print(f"Your new highest Score Ever is: {score}")
            
            # Find and replace the dictionary in file content
            match = re.search(r'scoreOfUsers\s*=\s*({.*?})', data, re.DOTALL)
            if not match:
                raise ValueError("Could not find scoreOfUsers dictionary in the file.")
            
            
            # Create updated content
            updated_content = re.sub(
                r'scoreOfUsers\s*=\s*{.*?}',
                f'scoreOfUsers = {scoreFile.scoreOfUsers}',
                data,
                flags=re.DOTALL
            )
            
            # Write back to file
            with open("scoreFile.py", "w") as file:
                file.write(updated_content)
    else:
        print("You are a new player")
        # Update in memory
        scoreFile.scoreOfUsers[name.lower()] = score
        
        # Find and replace the dictionary in file content
        updated_content = re.sub(
            r'scoreOfUsers\s*=\s*{.*?}',
            f'scoreOfUsers = {scoreFile.scoreOfUsers}',
            data,
            flags=re.DOTALL
        )
        
        # Write back to file
        with open("scoreFile.py", "w") as file:
            file.write(updated_content)





# python has lots of indentation problem , hence we use less comment in between and be proper with indentation


def selection(value):
    if(value==0):
        return "Snake"
    elif(value==1):
        return "Water"
    elif(value==2):
        return "Gun"
    else:
        return "Invalid Number"

        

def game():
    print('''
Enter 0 for Snake
Enter 1 for Water
Enter 2 for Gun   
''')
    
    # print(random.random())
    user=int(input("Enter your choice :"))
    system=int(random.random()*10)%3

    
    print(f"Opponent selected :{selection(system)}" )
    print(f"You selected :{selection(user)}" )


    # system=int(random.random()*10)%3
    # print(system)
    # system=int(random.random()*10)%3
    # print(system)
    
    print(f"{result(system,user)} Won the Match\n Current Score : {score}")
    dec=int(input("Do you want to continue (1/0):"))
    if(dec==1):
        game()
        return
    else:
      
        
        print("Take Care!")
        end(name, score)
        return


def result(system,user):
    global score #to affect global variable

    if(system==user):
        # print("Draw match")
        
        return "draw here hence noone"
    elif(user>2):
        # print("Draw match")
        print("Please Enter a valid num, You loose here for wrong selection")
        
        return "system"
    elif(system<user and system != 0 and user !=2):
        # print("You loose")
        
        return "system"
    elif(system == 0 and user ==2):
        # print("You win")
        
        score+=1
        return "You"
    else:
        # print("You win")
        score+=1
        return "You"



game()



# we can also track the pattern in win and loose by using mathematic like add, sub etc


'''
#used only for the first time to check
content='scoreOfUsers={"Sudha":10,"Sana":20}'
f=open("scoreFile.py","w+")
f.write(content)
f.close()
'''







