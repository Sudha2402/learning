#lambda
# def sq(l):
#     return l*l

# or 

sq=lambda l:l*l   #lambda used for single line function , it takes arg and return function
# sq(9)

print(sq(5))

# print(list(sq(5)))

sum=lambda a,b,c: a+b+c

print(sum(2,4,3))

l=["sudha","shanaya","sana"]
result="#####,and,####".join(l) #join this in between list

print(result) #sudha#####,and,####shanaya#####,and,####sana


#format method was used before f string

a="{} is a good {}".format("Sudha","girl")
b="{1} are good {0}".format("human beings","girls")  #we can ad indexing also in format
print(a)
print(b)




#map
#applies function to all the items in input list
lst=[2,4,2,4,2,4,7]
print(list(map(sq,lst)))#it creates error as TypeError: 'list' object is not callable  when string is passed then this error will be shown
sqlist=map(sq,lst)
print(sqlist) #<map object at 0x000001FF629C4AF0>
print(list(sqlist))



#filter

# filter creates list of items for which the function returns true

def even(n):
    if(n%2==0):
        return True
    return False

print(list(filter(even , lst)))
    


# reduce
# import reduce from functools #error
from functools import reduce 
#applies a rolling computation to sequential pair of elements

# val = reduce(sum,lst) #print(val) 3reduce takes only two arrguements at a time
# print(val)

def sumfun(a,b):
    return a+b

val = reduce(sumfun,lst)
print(val)

mul=lambda a,b : a*b
val=reduce(mul,lst)
print(val)




#join practice
table2=[i*2 for i in range(1,11)]
print(table2)
# strtable="\n".join(table2) #TypeError: sequence item 0: expected str instance, int found


table2=[str(i*2) for i in range(1,11)]
strtable="\n".join(table2)
print(strtable)




#to find max among list using reduce
def maxfun(a,b):
    if(a>b):
        return a
    return b

max=reduce(maxfun,lst)
print("max is ",max) #max is  4



