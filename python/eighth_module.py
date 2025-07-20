from modulefun import privatefun
# even if importing only privatefun function from another file but it will always execute all the global statements and like whole file is being called.

privatefun() #this needs to be called anywhere here, either in modulefun or this importing file #as it calles function directly and main condition applied below in the module, hence this way function should not be called.





#enumerate 
#list compreshension
l=[1,3,2,3,2]
# for i,val in l:#error
for i,val in enumerate(l): #enumerate is necessary to use, it adds counter to the iterative, i will store counter value andval store the value at that counter
    print(f"index : {i} and value : {val}")
    
    



#list compreshension
list1=[1,2,3,4,4]
squarelist=[i*i for i in list1] #reduces line of code
print(squarelist)

#or

squarelist =[]
for i in list1:
    squarelist.append(i*i)
    
    