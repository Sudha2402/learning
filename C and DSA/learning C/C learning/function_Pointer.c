/*
// Function Pointer in C

In C, like normal data pointers (int *, char *, etc), we can have pointers to functions.

Following are some interesting facts about function pointers.


1) Unlike normal pointers, a function pointer points to code, not data. Typically a function pointer stores the start of executable code.

2) Unlike normal pointers, we do not allocate de-allocate memory using function pointers.





*/

#include <stdio.h>

#include <stdlib.h>//qsort is function in stdlib.h library

#include <stdbool.h>//search function in it 

// A normal function with an int parameter and void return type
void fun(int a) { printf("Value of a is %d\n", a); } // Value of a is 10



// for 4th and 5the property
void add(int a, int b)
{
    printf("Addition is %d\n", a + b);
}
void subtract(int a, int b)
{
    printf("Subtraction is %d\n", a - b);
}
void multiply(int a, int b)
{
    printf("Multiplication is %d\n", a * b);
}



// for property 6
// A simple C program to show function pointers as parameter

// Two simple functions
void fun1() { printf("Fun1\n"); }
void fun2() { printf("Fun2\n"); }

// A function that receives a simple function
// as parameter and calls the function
void wrapper(void (*fun)()) { fun(); }



//// An example for qsort and comparator

// A sample comparator function that is used for sorting an integer array in ascending order.
// To sort any array for any other data type and/or criteria, all we need to do is write more compare functions. And we can use the same qsort()


int compare(const void* a, const void* b)
{
    return (*(int*)a - *(int*)b);
}



// A compare function that is used for searching an integer array

bool compareT(const void* a, const void* b)
{
    return (*(int*)a == *(int*)b);
}

// General purpose search() function that can be used
// for searching an element *x in an array arr[] of
// arr_size. Note that void pointers are used so that
// the function can be called by passing a pointer of
// any type. ele_size is size of an array element
int search(void* arr, int arr_size, int ele_size, void* x,
           bool compareT(const void*, const void*))
{
    // Since char takes one byte, we can use char pointer
    // for any type/ To get pointer arithmetic correct,
    // we need to multiply index with size of an array
    // element ele_size
    char* ptr = (char*)arr;

    int i;
    for (i = 0; i < arr_size; i++)
        if (compare(ptr + i * ele_size, x))
            return i;

    // If element not found
    return -1;
}










int main()
{
    // fun_ptr is a pointer to function fun()
    void (*fun_ptr)(int) = &fun;

    // If we remove bracket, then the expression “void (*fun_ptr)(int)” becomes “void *fun_ptr(int)” which is declaration of a function that returns void pointer.

    /* The above line is equivalent of following two
    void (*fun_ptr)(int);
    fun_ptr = &fun;
    */

    // Invoking fun() using fun_ptr
    (*fun_ptr)(10); // Value of a is 10

    //  This point in particular is very useful in C. In C, we can use function pointers to avoid code redundancy. For example a simple qsort() function can be used to sort arrays in ascending order or descending or by any other order in case of array of structures. Not only this, with function pointers and void pointers, it is possible to use qsort for any data type.

    // Comparator function of qsort() in C
    // the function uses QuickSort algorithm to sort the given array. Following is the prototype of qsort()
/*
void qsort (void* base, size_t num, size_t size, int (*comparator)(const void*,const void*));


continue in comparator_function_qsort file
*/




    // 3) A function’s name can also be used to get functions’ address. For example, in the below program, we have removed address operator ‘&’ in assignment. We have also changed function call by removing *, the program still works.

    void (*fun_ptr_2)(int) = fun; // & removed

    fun_ptr_2(10); // * removed
                   // Value of a is 10

    // 4) Like normal pointers, we can have an array of function pointers. Below example in point 5 shows syntax for array of pointers.

    // 5) Function pointer can be used in place of switch case. For example, in below program, user is asked for a choice between 0 and 2 to do different tasks.

    // fun_ptr_arr is an array of function pointers
    void (*fun_ptr_arr[])(int, int) = {add, subtract, multiply};
    unsigned int ch, a = 15, b = 10;// the keyword unsigned modifies the int and char data types to represent only positive numbers and zero, rather than both positive and negative numbers://here it represent unsigned integer

    printf("Enter Choice: 0 for add, 1 for subtract and 2 "
           "for multiply\n");
    scanf("%d", &ch);

    if (ch > 2)
        return 0;//something not given in choice

    (*fun_ptr_arr[ch])(a, b);
/*
Enter Choice: 0 for add, 1 for subtract and 2 for multiply
1
Subtraction is 5
*/




// 6) Like normal data pointers, a function pointer can be passed as an argument and can also be returned from a function.

// For example, consider the following C program where wrapper() receives a void fun() as parameter and calls the passed function.

wrapper(fun1);
    wrapper(fun2);
/*
Fun1
Fun2
*/

// This point in particular is very useful in C. In C, we can use function pointers to avoid code redundancy. For example a simple qsort() function can be used to sort arrays in ascending order or descending or by any other order in case of array of structures. Not only this, with function pointers and void pointers, it is possible to use qsort for any data type.



// // An example for qsort and comparator

    int arr[] = { 10, 5, 15, 12, 90, 80 };
    int n = sizeof(arr) / sizeof(arr[0]);

    qsort(arr, n, sizeof(int), compare);//The function does not return any value, but modifies the content of the array pointed to by base reordering its elements as defined by compare.

    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

// 5 10 12 15 80 90



// Similar to qsort(), we can write our own functions that can be used for any data type and can do different tasks without code redundancy. Below is an example search function that can be used for any data type. In fact we can use this search function to find close elements (below a threshold) by writing a customized compareT function.


int arrC[] = { 2, 5, 7, 90, 70 };
    int nSize = sizeof(arrC) / sizeof(arrC[0]);
    int x = 7;
    printf("\nReturned index is %d ",
           search(arrC, nSize, sizeof(int), &x, compareT));

// Returned index is 0




/*
Parameters
base
Pointer to the first object of the array to be sorted, converted to a void*.
num
Number of elements in the array pointed to by base.
size_t is an unsigned integral type.
size
Size in bytes of each element in the array.
size_t is an unsigned integral type.
compar
Pointer to a function that compares two elements.
This function is called repeatedly by qsort to compare two elements. It shall follow the following prototype:
1
int compar (const void* p1, const void* p2);
Taking two pointers as arguments (both converted to const void*). The function defines the order of the elements by returning (in a stable and transitive manner):
return value	meaning
<0	The element pointed to by p1 goes before the element pointed to by p2
0	The element pointed to by p1 is equivalent to the element pointed to by p2
>0	The element pointed to by p1 goes after the element pointed to by p2

For types that can be compared using regular relational operators, a general compar function may look like:

int compareMyType (const void * a, const void * b)
{
  if ( *(MyType*)a <  *(MyType*)b ) return -1;
  if ( *(MyType*)a == *(MyType*)b ) return 0;
  if ( *(MyType*)a >  *(MyType*)b ) return 1;
}

*/


    return 0;
}