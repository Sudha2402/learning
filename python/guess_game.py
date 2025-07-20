import random
guess=random.randint(1,10)
# print(guess)


attempts=0
def guessFun():
    num=int(input("Enter your guess num:"))
    global attempts
    attempts = attempts +1
    if(guess==num):
        print(f"you successfully guessed the number in {attempts} attempts")
        return 
    
    elif(guess>num):
        print(f"Enter a higher number")
        return guessFun()
    elif(guess<num):
        print(f"Enter a lower number")
        return guessFun()
    else:
        print("please enter a valid number")
        return guessFun()
        


# guessFun() #we want to check the lower number too.
    



#or it can be done using while also

attempts= 0
num = -1
while(num != guess):
    attempts +=1
    num=int(input("Enter your guess num:"))
    if(guess>num):
        print(f"Enter a higher number")
        # break
        
    elif(guess<num):
        print(f"Enter a lower number")
        # break
        
    else:
        print("please enter a valid number")
        # break
        
        
print(f"you successfully guessed the number in {attempts} attempts")
 