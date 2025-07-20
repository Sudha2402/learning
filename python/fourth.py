#file I/O

f=open("second.py","r")
content=f.read()
print("content : "+content)
print(f"Sudha present in the content {content.find("Sudha")}") #832 index value
#or

if("Sudha" in content):
    print("Sudha in the content of second.py file")

f.close()


content="\nSudha, I love your determination"
f=open("file.txt","a")
f.write(content)
f.close()


f=open("file.txt","r")
content=f.readlines() #return list of lines
print(content)
f.close()


# readline reads one line at a time and place the cursor at the end position, it ends when it found "" in the last line



f=open("file.txt","r")
content=f.readline() #return list of lines
while(content != ""):
    print("content of readline :" + content)
    content=f.readline()

f.close()





with open("file.txt","r") as f:
    content=f.readlines() #return list of lines
    print(content)
    # f.close() not needed in with as it automatically closes when come out of indentation of with


with open("file.txt","w") as f:
    f.write("") #it will wipe out the content of file 
    
    
# we can copy and paste the whole from one file to another file.



