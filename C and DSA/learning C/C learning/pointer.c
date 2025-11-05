#include <stdio.h>
#include <stdlib.h>

// In pointer declaration, we only declare the pointer but do not initialize it. To declare a pointer, we use the ( * ) dereference operator before its name.
// We generally use the ( &: ampersand ) addressof operator to get the memory address of a variable and then store it in the pointer variable.

// Note: It is recommended that the pointers should always be initialized to some value before starting using it. Otherwise, it may lead to number of errors.

// The size of pointers in C is
// 8 bytes for a 64-bit System
// 4 bytes for a 32-bit System //my system is 32 bits

// The reason for the same size is that the pointers store the memory addresses, no matter what data type they are. As the space required to store the addresses of the different memory locations is the same, the memory required by one pointer type will be equal to the memory required by other pointer types.

// use %p format specifier for viewing the address
// print value of ptr
// printf("Value of ptr = %p\n\n", ptr)

// dummy structure
struct strp
{
       int bin; // don't keep it empty otherwise it will halt at this line while compilation and give error
};

// dummy function
void func(int a, int b) {};

int main()
{

       // declare all variables at top otherwise it will give error or simply halt the program

       // //  dummy variables definitions
       int a10 = 10;
       char cG = 'G';
       struct strp x;//wow , this can be helful to create new alias according to the datatype 

       // pointer definitions of different types
       int *ptr_int = &a10;
       char *ptr_char = &cG;

       struct strp *ptr_str = &x; // NOTE:as datatype to be same as value hence  struct strp is used as datatype before pointer

       void (*ptr_func)(int, int) = &func;
       void *ptr_vn = NULL;

       int a;
       int b = 5;
       printf("address of a is : %d \n", &a); // address of a is :  6356728 //it is integer
       int *ptra;                             // Pointer Declaration
       ptra = &a;                             // Pointer Initialization

       printf("address of a is : %d \n", ptra); // address of a is : 6356728 
       printf("&ptra is : %d \n", &ptra);       // 6356720 , it is address of ptra
       printf("value of a is : %d \n", *ptra);  //-2 as only declared but not initialized

       int *ptrb = &b; // pointer definition as the pointer is declared and initialized at the same time.
       printf("address of b is : %d \n", ptrb);//6356724
       printf("value of b is : %d \n", *ptrb);      // 5
       int *ptre;                                   // Pointer Declaration
       printf("address of ptre is : %d \n", &ptre); // 6356716 //garbage value
       printf("value of ptre is : %d \n", *ptre);   // 6356964

       // int *ptrc = NULL;//main problem is created by int null pointer and after this program will simply halt
       // printf("address of ptrc is : %d \n", ptrc); // 0
       // printf("value of ptrc is : %d \n", *ptrc); //do nothing and terminate and PS C:\Sudhadocuments\C files\C learning> is seen

       int *ptrd;                                   // address of ptrd is : 6356740
       printf("address of ptrd is : %d \n", &ptrd); // due to initial termination, it's output will not be seen//6356712
       printf("value of ptrd is : %d \n", *ptrd); //6356724  // do nothing but if commented printing null pointer by *ptrc then it prints output//value of ptrd is : 1076891809

       // pointer can be ++ , -- , +, - but & can't increment or decrement





       //  to find the size of different pointer types.
       // //////declare all variables at top otherwise it will give error or simly halt the program
       //  // dummy variables definitions
       //     int a10 = 10;
       //     char cG = 'G';
       //     struct strp x;

       //     // pointer definitions of different types
       //     int* ptr_int = &a10;
       //     char* ptr_char = &cG;
       //     struct strp* ptr_str = &x;
       //     void (*ptr_func)(int, int) = &func;

       //     void* ptr_vn = NULL;

       // printing sizes
       printf("Size of Integer Pointer  \t:\t%d bytes\n",
              sizeof(ptr_int));// 4 bytes
       printf("Size of Character Pointer\t:\t%d bytes\n",
              sizeof(ptr_char));// 4 bytes
       printf("Size of Structure Pointer\t:\t%d bytes\n",sizeof(ptr_str));// 4 bytes
       printf("Size of Function Pointer\t:\t%d bytes\n", sizeof(ptr_func));// 4 bytes
       printf("Size of NULL Void Pointer\t:\t%d bytes", sizeof(ptr_vn));// 4 bytes

       /*
Size of Integer Pointer         :       4 bytes
Size of Character Pointer       :       4 bytes
Size of Structure Pointer       :       4 bytes
Size of Function Pointer        :       4 bytes
Size of NULL Void Pointer       :       4 bytes




       // Types of pointer

       // https://www.geeksforgeeks.org/c-pointers/


       // 1. void pointer
       // void * pointer_name;
       // One of the main properties of void pointers is that they cannot be dereferenced.


       // 2. generic pointer



       // 4. array pointer
       // char *ptr = &array_name;





       // 6. pointer to function
       // Function pointers point to the functions. They are different from the rest of the pointers in the sense that instead of pointing to the data, they point to the code. Let’s consider a function prototype – int func (int, char), the function pointer for this function will be

       // Syntax

       // int (*ptr)(int, char);

       // Note: The syntax of the function pointers changes according to the function prototype.



       //  Integer Pointers
       // int *ptr;


       // Structure Pointer
       // struct struct_name *ptr;
       // structure pointers are used in data structures such as linked lists, trees, etc.


       //  wild pointers
       // int *ptr;
       // char *str;
       // The Wild Pointers are pointers that have not been initialized with something yet.
       // The pointer declared here will point to some random memory address as it is not initialized. Such pointers are called wild pointers.


       // 5. pointer to pointer
       // Double Pointers
       // In C language, we can define a pointer that stores the memory address of another pointer. Such pointers are called double-pointers or pointers-to-pointer. Instead of pointing to a data value, they point to another pointer.

       // Syntax

       // datatype ** pointer_name;

       // Dereferencing Double Pointer

       // *pointer_name; // get the address stored in the inner level pointer
       // **pointer_name; // get the value pointed by inner level pointer

       // Note: In C, we can create multi-level pointers with any number of levels such as – ***ptr3, ****ptr4, ******ptr5 and so on.



       // NULL Pointer
       // data_type *pointer_name = NULL;
       //         or
       // pointer_name = NULL
       // It is said to be good practice to assign NULL to the pointers currently not in use.




       //  Constant Pointers
       // In constant pointers, the memory address stored inside the pointer is constant and cannot be modified once it is defined. It will always point to the same memory address.

       // Syntax

       // data_type * const pointer_name;



       // Pointer to Constant
       // The pointers pointing to a constant value that cannot be modified are called pointers to a constant. Here we can only access the data pointed by the pointer, but cannot modify it. Although, we can change the address stored in the pointer to constant.

       // Syntax

       // const data_type * pointer_name;

       */

       /*

       Other Types of Pointers in C:
       There are also the following types of pointers available to use in C apart from those specified above:

       Far pointer: A far pointer is typically 32-bit that can access memory outside the current segment.
       Dangling pointer: A pointer pointing to a memory location that has been deleted (or freed) is called a dangling pointer.
       Huge pointer: A huge pointer is 32-bit long containing segment address and offset address.
       Complex pointer: Pointers with multiple levels of indirection.
       Near pointer: Near pointer is used to store 16-bit addresses means within the current segment on a 16-bit machine.
       Normalized pointer: It is a 32-bit pointer, which has as much of its value in the segment register as possible.
       File Pointer: The pointer to a FILE data type is called a stream pointer or a file pointer.

       */

       return 0;
}
