#write a class Train which has methods to book a ticket, get status(no seats) and get information of train running under the railways


# import random
from random import randint

class train:
    
    def __init__(self,trainNo):
        self.trainNo=trainNo
        
    def book(self,name,age,fro,to):
        print(f"Train number {self.trainNo} is booked with name {name} , age {age} from {fro} to {to}.  \nHappy journey!")
        
    def getStatus(self,fro,to):
        print(f"Train number {self.trainNo} from {fro} to {to} is on time ")
        
    def getFare(self,fro,to):
        print(f"ticket fare in Train number {self.trainNo} is {randint(500,1000)} ")
        
        
        
        
                
t = train(12032)      
t.book("Sudha",21,"kanpur","Lucknow")  
t.getFare("kanpur","Lucknow")  
t.getStatus("kanpur","Lucknow")  
