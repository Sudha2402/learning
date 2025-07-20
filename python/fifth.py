#oops

import math

class Employee: #class
    
    name="Sana"#to make this as priority over instance attribute in a method call then @classmethod attribute is used.
    lang="javascript" #attribute of class
    salary=1300000
    
    def get_salary():#error as no parameter to receive.#if we do't want any parameter passed then we use staticmethod decorator but it will no handle object attributes.
        print(f"Salary:{e.salary}")
        # print(f"Salary:{salary}") #salary is undefined here as it don't take object to call the class value//error
    
    @staticmethod 
    def get_salary_static():#error as no parameter to receive.#if we do't want any parameter passed then we use staticmethod decorator
        print("Welcome, get salary function is called ")
        
        
    @classmethod #Salary:Sana prefernece as it try to take all varables from class only not the object.
    def get_salaryNew(self): #variable name can be any name not only self
        print(f"Salary:{e.salary}") #it will recive the e object defined outside
        print(f"Salary:{self.salary}") 
        print(f"Name:{self.name}") #sudha prefernece , to remove use classmethod for class preference
        
        
        #dunder methods starts with double underscore.
        
        
    def __init__(self): #called automatically
        print("I am creating an object")
        # print(f"Age :{self.age}") #it will show error because age is only for object property.
        
        
    # def __init__(self,name,salary): #called automatically #creates error because these paramsneter are must to be passed if if not needed. TypeError: Employee.__init__() missing 2 required positional arguments: 'name' and 'salary'
    #     print("I am creating an object")
    #     print(f"Salary:{salary} , name:{name}") 
        
        
    def __helloinit__(self): #not called automatically
        print("I am creating init another name an object")
        print(f"Age :{self.age}")
    
    
    
    # learn this
    @property
    def ageFun(self):
        return self.ageval #returns 30
    
    @ageFun.setter #ageFun same as function name #together with property
    def ageFun(self,value):
        self.ageval=value
        
    
    # print(ageval)
    
        
        


e=Employee() #object of class
# e=Employee("Sudha","543343") #needed always because init_ is initialized automatically, hence we avoid using init with parameter. else creates error.
#I am creating an object
# Salary:543343 , name:Sudha

e.name="Sudha" #instance varible or object attribute #more priority then class attributes

print(e.lang,e.salary,e.name) #javascript 1300000 Sudha #not affected by init




sana=Employee()
sana.name="Sana"
print(sana.lang,sana.salary,sana.name)
print(Employee.name)#class Sudha #instance doesn't change the class property.


# e.get_salary() #error Employee.get_salary() takes 0 positional arguments but 1 was given
# Employee.get_salary(e) #it is same as above taken by parser where object is passed as parameter automically . #hence we need to convert the method such that it receives this parameter passed


e.get_salary_static()

# Employee.get_salaryNew(e) #error free
e.get_salaryNew() #error free


e.ageFun=30  #to add this property in class , we need to call as property decorator before this function defination
print(e.ageFun)  #all variable name should be same ageFun, even in property, property setter


# print(e.ageFun()) #error, as it is a property no a function


# e.age(40)






#programmer class to store the information of employees working at microsoft

class microsoft:
    company="Microsoft"
    def __init__(self,name,age,salary):
        self.name=name
        self.age=age
        self.salary=salary
        
        
e=microsoft("Sudha",30,1344333)
print(e.name,e.age,e.company,e.salary); #init will also initialize

s=microsoft("Sana",20,1344333)
print(s.name,s.age,s.company,s.salary);




#calculator
class calculator:
    
    
    def findSqrt(self,x):
        # for 0 and 1, the square roots are themselves
        if x < 2: 
            return x
        
        # considering the equation values 
        y = x
        z = (y + (x/y)) / 2
        
        # as we want to get upto 5 decimal digits, the absolute difference should not exceed
        # 0.00001
        while abs(y - z) >= 0.00001:
            y = z
            z = (y + (x/y)) / 2
        
        return z
    
    
    
    
    def calculate(self,number):
        
        print(f"square of {number} is {number*number}")
        print(f"cube of {number} is {number*number*number}")
        
        
        
        print(f"square root of {number} is {self.findSqrt(number)}")
        print(f"square root of {number} is {math.sqrt(number)}")
        print(f"square root of {number} is {number**1/2}")  #power is given using **
        
   
        
c=calculator()
c.calculate(5)

# if we pass the parameter in class call object then it is not needed to pass in the method calls


class calc:
    def __init__(self,number): #__init__:- 
        ## private varibale or property in Python
        self.n=number #this n will be defined and passed automatically to the others.

    ## getter method to get the properties using an object#used to get the values of private attribute a.
    def square(self):
        print(f"square of {self.n} is {self.n*self.n}")
        
    def squareRoot(self):
        print(f"square Root of {self.n} is {self.n**1/2}")
    
    
    # ## setter method to change the value 'n' using an object #used to set the value of a using an object of a class.
    def set_n(self,a):
        # self.n=a
        
        if a > 0 and a % 2 == 0:
            self.n = a
        else:
            self.n = 2

cal=calc(3)
cal.square() #no parameter is passed as , init passed is stored.
cal.squareRoot() #no parameter is passed as , init passed is stored.





#same we can done using @property decorator

class calc2:
    
    def __init__(self,a): #__init__:- 
        ## initializing the attribute
        self.n=a #at start n will be initialized like this #n is must to use it in property and getter and setter method should be with this name
        




    # @property is used to get the value of a private attribute without using any getter methods. We have to put a line @property in front of the method where we return the private variable.
    
    @property #atrribute name
    def n(self):  #self.n=a same name
        return self.number #n atribute will be called directly as it is class attribute not method. #this number value will be set in setter and return back in n.

    
    ### the attribute name and the method name must be same which is used to set the value for the attribute
    @n.setter #method name #To set the value of the private variable, we use @method_name.setter in front of the method. We have to use it as a setter.
    def n(self,a): 
       
        if a > 0 and a % 2 == 0:
            self.number = a #this will be return in n attribute of class
        else:
            self.number = 2


obj=calc2(23)
print(obj.n) #it is used in getter.





