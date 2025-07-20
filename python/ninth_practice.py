
try:
    with open("file.txt","r") as f:
        print(f.read())
    
except Exception as e:
    print(e)
    
try:       
    with open("file1.txt","r") as f: #FileNotFoundError
        print(f.read())
except Exception as e:
    print(e)#[Errno 2] No such file or directory: 'file1.txt'
    
print("succesfully termination")
    


for i,val in enumerate([2,4,2,3,34]):
    if(i==2 or i==4 or i==6):
        print(f"{i} and value {val}")
        
        
        

#print the table of the number        
num=int(input("Enter a num: "))
tablenum=[num*i for i in range(1,11)]
print(tablenum)



# storing table in table.txt

with open("table.txt","a") as t:
    num=int(input("Enter a num: "))
    tablenum=[num*i for i in range(1,11)]
    # t.write(tablenum)#write() argument must be str, not list
    t.write(str(tablenum)+"\n")#write() argument must be str, not list
    print(f"{num} table is inserted succesfully")