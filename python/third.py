#conditional

# indentations starts with : hence no { used}

age=int(input("Enter your age :"))

if(age>18):
    print("You can vote")
    print("\n Congratulations!")

elif(age<=0):
    print("Enter a valid age")
else:
    print("Sorry, you can't vote. Enjoy your under age")


print("Hello user")



# for # while


my_string = "   Hello, World!   "
cleaned_string = my_string.strip()
print(cleaned_string)
# Output: "Hello, World!"

data = "###Python Programming###"
cleaned_data = data.strip('#')
print(cleaned_data)
# Output: "Python Programming"



def funName(para):
    print("inside fun")

funName('pa')



for i in range(1,n):
    print('*'*i)




def rem(l,word):
    n=[]
    for item in l:
        if not(item == word):
            n.append(item.strip(word))
    l=n
    print(l) #here only for paramaeter updated
    return n



l=["Sudha","Sana%%%","####shaanaya"]

print(rem(l,"#"),end="")#end used to replace end "\n" with passed values
print(rem(l,"%"))
print(l) #['Sudha', 'Sana%%%', '####shaanaya']





#regular expression ,re
# 
# 
# #Searching for Patterns
import re
text = "Score: 100"
match = re.search(r'Score: (\d+)', text)  # Finds "100"
print(match.group(1))  # Output: 100

#Replacing Text
text = "Hello World"
new_text = re.sub(r'\s', '_', text)  # "Hello_World"

#Splitting Strings
text = "apple,banana,cherry"
fruits = re.split(r',', text)  # ['apple', 'banana', 'cherry']







p1="Make a lot of money"
p2="buy now"
p3="click"
p4="subscribe"

comment=input("Enter your comment:")

if((p1 in comment) or (p2 in comment) or (p4 in comment) or (p3 in comment)):
    
    # comment=comment.replace("click", len(comment)*'#')
    comment=comment.replace("click", len("click")*'#')
    print(comment)
    print("this is spam comment.")
    
    
else:
    print("thanks for your comment")








