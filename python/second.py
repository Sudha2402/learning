"""

"""


# operators boolean

# truth table:
true=True
false=False
print("true or false is",true or false) #true and false is True
print("true and false is:",true and false,sep='\n') #true and false is True #sep used for current line
print("complement of false is",not(false)) #true and false is True

print("\n")

# type
print(type(5.954))


# typecasting str(), float() int()
print(type("3.56"))
print(type(float("3.56"))) #<class 'float'>



# a=input("Enter number 1 :")
# b=input("Enter number 2 :")

a=int(input("Enter number 1 :"))
b=int(input("Enter number 2 :"))

print("Number a is : ", a)
print("Number b is : \n", b)#new line will come in between not after
print("Sum is : ", a+b, "\n\n Finish")#works giving new line at the end






# input to take name and print it 
name=input("Enter your Name :")#Welcome Sana to Sudha's Hub
print("Welcome "+name+" to Sudha's Hub")
print("Welcome {name} to Sudha's Hub")#f must otherwise { will be seen and no name update#Welcome {name} to Sudha's Hub
print(f"Welcome {name} to Sudha's Hub")#fstring method for string inbult tag like in javascript#Welcome Sana to Sudha's Hub


nameMessage=f"Welcome {name} to Sudha's Hub"
print(nameMessage)

name=nameMessage #it will update the string but as string is immutable hence it not allow index update #name[1]="m" is error//list are mutable

print(name)




# letter template
letter= '''
Dear <Name>,
You are selected!
<Date>
'''

print(letter.replace("<Name>","Sudha").replace("<Date>","24-07-2025"))

'''
Dear Sudha,
You are selected!
24-07-2025
'''

# to find the double space
print(name.find("  "))#-1 if no index


print(name.replace("  "," "))#-1 if no index
#original string not affected as it is mutable. But we can chage original also by storing it's output in a variable and update the old



ContentList=['Sudha',21,'24/02/2004']
print(ContentList)
print(ContentList[0])
print(ContentList[1:4])

ContentList[0]="Sana" #mutable#any methods update the list
print(ContentList[0])



marks=[3,1,4,0,5,6]
print(marks)
marks.sort() #change the original
print(marks)
marks.reverse()
print(marks)
print(marks.pop(3)) # #even this is mutable and update the oringinal # pop this index value and returns the deleted value
print(marks)
marks.append(332432)
print(marks)
marks.insert(0,90)
print(marks)
marks.remove(0)
print(marks)
print(marks[1::])#slice after index 0 means from 1
marks=[3,1,4,0,5,6]
print(sum(marks))



# tuple
# must have one , #it is immutable
a=(1)#simple int
print(a)
a=(1,)
print(a)
a=("Sudha","kumari",21,'24/02/2004',21,24)
print(a.index(21))
b=a*3 #add more content in the list
print(b)
print(a.count(21))
print(a[3:5:2])  #step used as increment index, default 1.










# practice
fruits=[]
f1=input("Enter name of fruits")
fruits.append(f1)
f2=input("Enter name of fruits")
fruits.append(f2)
f3=input("Enter name of fruits")
fruits.append(f3)
f4=input("Enter name of fruits")
fruits.append(f4)
print(fruits)










#dictionary #mutable

d={}
Student={
    "Sudha":[21,"24/02/04"],
    "Sana":[22,"23/02/04"],
    0:"no data"

}

print(Student["Sudha"]) #Sudha #key-value pairs

marks={
    "Sudha":30,
    "Anjali":50,
    "Sandhya":60,
    "Amar":80

}

print(marks["Sudha"])


# Storing in list would have become complecated

student2=[["Sudha",30],["Anj",50]] #complicated search time

marks.items()
marks.keys()
marks.values()
marks.update({"Sudha":30,"Shanaya":60}) #add key-value if not 
marks.get("Ssd") #no error only no such record
marks["Ssd"] #error








#set#no repeatation#no indexing#no order#

# set={,}#error
setEm=set() #used to make empty set
s={3,54,33,3,3,432,24,3443,5,3,"Sudha"}
s1={3,54,33,3,3,432,24,3443,5,3,"Sudha"}
print(s) #set avoid repeated value hence display only unique values #order is not maintain
s.add(5442345)
print(s)
s.remove(5442345)
print(s)
s.pop()
print(s) 
print(s1.union(s))
print(s1.intersection(s))
print(s1-s)
print(s1.issubset(s))
# set can't include list


numSet=set()
num=input("Enter number in set 1:")
numSet.add(int(num))



#dict words can be solve word meaning


#note 1=1.0 hence considered repeatable





# take values in dict
language={}
name1=input("Enter name 1:")
lang1=input("Enter language preference:")
language.update({name1:lang1})
name2=input("Enter name 1:")
lang2=input("Enter language preference:")
language.update({name2:lang2})
name3=input("Enter name 3:")
lang3=input("Enter language preference:")
language.update({name3:lang3})
name4=input("Enter name 4:")
lang4=input("Enter language preference:")
language.update({name4:lang4})
name5=input("Enter name 5:")
lang5=input("Enter language preference:")
language.update({name5:lang5})
print(language)





