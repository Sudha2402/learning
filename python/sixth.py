#walrus :=
if(n := len([9,0,3,6,2])>0):
    print("list is not empty")
    
    
#type def :
num :int = 45
def greet(name:str, age: int)->str : #it takes name as string and return the function value as string
    return f"hello {name}!\nYou are {age} old"

print(greet("Sudha",21))




#advanced type hint
from typing import List,Tuple,Dict,Union

lt:list[int] =[2,5,3,4,2,"6"] #int is not explicit conversion it is just for reading to be alert while entering the numbers so that new user do not write other than int.

lt:list[int] =[2,5,3,4,2,"g"]
print(lt)

print(type(lt[5])) #<class 'str'>


person : tuple[str,int] = ("Sudha",21) #just defineing the first should be str then int

score : dict[str,int] = {"Sudha":32,"Sana":12}

identifiers : Union[str,int] = "324ds"
identifiers : Union[str,int] = "324"
#all valid only keep in mind to enter only among str and int not other than thia.



#match
def help_status(status):
    match status:
        case 200:
            return "ok"
          
        
        case 404:
            return "not found"
        case 500:
            return "internal server error"
        case _ : #case _: (underscore) as the catch-all/wildcard.
            return "unknown error" #here no default is used


print(help_status(200))
print(help_status(404))
print(help_status(500))
print(help_status(100))



#merging dictionaries and update

dict1 ={"Sudha":32,"Sana":12}
dict2 ={"Sudha":36,"Suhana":12}
merged = dict1 | dict2 #removes dublicate and if same key then it will write updated value #{'Sudha': 36, 'Sana': 12, 'Suhana': 12} 
print(merged)


