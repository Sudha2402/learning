#include <stdio.h>
/*
C Pointer Arithmetic
The Pointer Arithmetic refers to the legal or valid arithmetic operations that can be performed on a pointer. It is slightly different from the ones that we generally use for mathematical calculations as only a limited set of operations can be performed on pointers. These operations include:

Increment in a Pointer
Decrement in a Pointer
Addition of integer to a pointer
Subtraction of integer to a pointer
Subtracting two pointers of the same type
Comparison of pointers of the same type.
Assignment of pointers of the same type.

*/
int main()
{

    // Declare an array
    int v[3] = {10, 100, 200};

    // Declare pointer variable
    int *ptr;//if points to an array then points to the starting address that is 0th index value

    // Assign the address of v[0] to ptr but ptr[0] gives the value at index 0 and ptr[i] gives value at index i

    // ptr = v;//ptr take the address but here & is not used beacuse it showed warning check below . But & also gives the same result as if & not used

    ptr = &v;//ptr take the address but here & is not used beacuse  warning: assignment from incompatible pointer type [-Wincompatible-pointer-types] ptr = &v;//ptr take the address but here & is not used beacuse
        //  ^


        // 


    printf("ptr is : %d\n",ptr);//ptr is : 6356744
    printf("ptr is : %s\n",ptr);//         blank 
printf("&ptr is : %d\n",&ptr);//&ptr is : 6356740
printf("&ptr[0] is : %d\n",&ptr[0]);//ptr[0] is : 6356744


     printf("Elements of the array are: ");

    printf("%d, %d, %d", ptr[0], ptr[1], ptr[2]);//Elements of the array are: 10, 100, 200

    printf("\n\n");

    //  as the array elements are stored continuously, we can pointer arithmetic operations such as increment, decrement, addition, and subtraction of integers on pointer to move between array elements.

    for (int i = 0; i < 3; i++)
    {

        // print value at address which is stored in ptr
        printf("Value of *ptr = %d\n", *ptr);//starting index 

        // print value of ptr that is address
        printf("Value of ptr = %p\n\n", ptr);

        // Increment pointer ptr by 1
        ptr++; //points to next address by adding 4 bytes more according to 32 bits system

    }

    /*
Value of *ptr = 10
Value of ptr = 0060FF08

Value of *ptr = 100
Value of ptr = 0060FF0C

Value of *ptr = 200
Value of ptr = 0060FF10
    */


   //some more example of arithmetic

    // defining array
    int arr[5] = { 1, 2, 3, 4, 5 };

    // defining the pointer to array
    int* ptr_arr = arr; //to avoide warning due to & , in case of array we used direct array name

    // traversing array using pointer arithmetic
     printf("arr elements are :");
    for (int i = 0; i < 5; i++) {
        printf("%d ", *ptr_arr++);//1 2 3 4 5
    }
    // arr elements are :1 2 3 4 5

   
    printf("\n");

    return 0;
}