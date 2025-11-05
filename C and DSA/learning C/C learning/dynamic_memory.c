#include <stdio.h>
#include <stdlib.h>
// <stdlib.h> is used for dynamic memory allocation

int main()
{

    // This pointer will hold the base address of the block created //* ptr hold value but ptr holds address
    int *ptr;
    int *ptr2;
    int n, i;

    // Get the number of elements for the array
    printf("Enter number of elements:");
    scanf("%d", &n);
    printf("Entered number of elements: %d\n", n);

    // Dynamically allocate memory using malloc()
    ptr = (int *)malloc(n * sizeof(int)); // ptr holds address //as int* ptr declared hence (int*)malloc declared to keep the datatype of pointer same

    ptr2 = (int *)calloc(n, sizeof(int));
    ptr2 = realloc(ptr2, 2 * n); // if entered number of elements is 8 then it will create 8*2 elements size now

    // Get the new size for the array
    n = 10;
    printf("\n\nEnter the new size of the array: %d\n", n);
    // Dynamically re-allocate memory using realloc()
    ptr = (int *)realloc(ptr, n * sizeof(int)); // here it is just written like malloc but instead of n , ptr used which represents the old size and n * sizeof(int) represents the new size

    if (ptr == NULL)
    {
        printf("Reallocation Failed\n");
        exit(0);
    }

    // Check if the memory has been successfully
    // allocated by malloc or not
    if (ptr == NULL || ptr2 == NULL)
    {

        printf("Memory not allocated.\n");
        exit(0);
    }
    else
    {

        // Memory has been successfully allocated
        printf("Memory successfully allocated using malloc or calloc.\n");

        printf("&ptr %d \n", &ptr); //&ptr 6356760  //here the base address has only the difference of 4 that is size of int*
        printf("&ptr %x \n", &ptr); // 60ff18  //here the base address has only the difference of 4 that is size //&ptr 60ff18

        // Get the base address of the block created

        printf("*&ptr %x \n", *&ptr); //*&ptr ff19e8
        printf("*&ptr %d \n", *&ptr); //*&ptr 16718312//here we observe that base address of first block is  8133096 and if number of elements entered is n then it will allocate 4*8 bytes more ==32 bytes and as this very first address is assigned then we only need to assign for 7 other elements and becomes 16718312 + (7*4) ==16718340
        // OR
        printf("(unsigned int)ptr %x \n", (unsigned int)ptr); //(unsigned int)ptr ff19e8//same as *&ptr

        printf("&ptr2 %d \n", &ptr2);   //&ptr2 6356756
        printf("&ptr2 %x \n", &ptr2);   //&ptr2 60ff14
        printf("*&ptr2 %x \n", *&ptr2); //*&ptr2 ff1a68
        printf("*&ptr2 %d \n", *&ptr2); //*&ptr2 16718440 //after leaving 100bytes , this new allocation started //here 100 bytes is leaved so that in case of reallocation ,it can be extended from old but not exactly , realloc starts from garbage value

        // the difference of 4 in the addresses is because int* ptr; is of 4 bytes only

        // Get the elements of the array
        for (i = 0; i < n; ++i)
        {
            ptr[i] = i + 1;  // we are putting the values in array
            ptr2[i] = i + 1; // we are putting the values in array
        }

        // Print the elements of the array
        printf("The elements of the array are: ");
        for (i = 0; i < n; ++i)
        {
            printf("%d ", ptr[i]);

            
            printf("&ptr %d \n", &ptr[i]);

            /*
&ptr 16718312
&ptr 16718316
&ptr 16718320
&ptr 16718324
&ptr 16718328
&ptr 16718332
&ptr 16718336
&ptr 16718340

            */
            printf("&ptr2 %d \n", &ptr2[i]);
            /*
&ptr2 16718440
&ptr2 16718444
&ptr2 16718448
&ptr2 16718452
&ptr2 16718456
&ptr2 16718460
&ptr2 16718464
&ptr2 16718468

            */

            printf("*&ptr %d \n", *&ptr[i]);//it returns the value
            /*
1 *&ptr 1
2 *&ptr 2
3 *&ptr 3
4 *&ptr 4
5 *&ptr 5
6 *&ptr 6
7 *&ptr 7
8 *&ptr 8
            */
        }

        for (i = 0; i < 2 * n; ++i)
        { // to check for realloc as size chacged to 2n
            printf("&ptr2[%d] %d \n", i, &ptr2[i]);
            /*
&ptr2[0] 15800936
&ptr2[1] 15800940
&ptr2[2] 15800944
&ptr2[3] 15800948
&ptr2[4] 15800952
&ptr2[5] 15800956
&ptr2[6] 15800960
&ptr2[7] 15800964
&ptr2[8] 15800968
&ptr2[9] 15800972
&ptr2[10] 15800976
&ptr2[11] 15800980
&ptr2[12] 15800984
&ptr2[13] 15800988
&ptr2[14] 15800992
&ptr2[15] 15800996
            */
        }

        // Print the elements of the array
        printf("\nThe elements of the array are: ");
        for (i = 0; i < n; ++i)
        {

            printf("%d ", ptr2[i]);
        }




free(ptr);//here as else part creates hence free here in else part 



 // Free the memory

    free(ptr);

    printf("Malloc Memory successfully freed.\n");

    // Free the memory
    free(ptr2);
    printf("Calloc Memory successfully freed.\n");
        
    }

    /*
    Enter number of elements:8
    Entered number of elements: 8
    Memory successfully allocated using malloc.
    The elements of the array are: 1 2 3 4 5 6 7 8
    */

   

    return 0;

    /*
        // C malloc() method
    // The “malloc” or “memory allocation” method in C is used to dynamically allocate a single large block of memory with the specified size. It returns a pointer of type void which can be cast into a pointer of any form. It doesn’t Initialize memory at execution time so that it has initialized each block with the default garbage value initially.

    ptr = (cast-type*) malloc(byte-size)
    For Example:
    ptr = (int*) malloc(100 * sizeof(int));
    Since the size of int is 4 bytes, this statement will allocate 400 bytes of memory. And, the pointer ptr holds the address of the first byte in the allocated memory(total 400 bytes).

    // If space is insufficient, allocation fails and returns a NULL pointer.


    C calloc() method
    “calloc” or “contiguous allocation” method in C is used to dynamically allocate the specified number of blocks of memory of the specified type. it is very much similar to malloc() but has two different points and these are:
    It initializes each block with a default value ‘0’.
    It has two parameters or arguments as compare to malloc().

    ptr = (cast-type*)calloc(n, element-size);
    here, n is the no. of elements and element-size is the size of each element.

    ptr = (float*) calloc(25, sizeof(float));
    This statement allocates contiguous space in memory for 25 elements each with the size of the float.

    // If space is insufficient, allocation fails and returns a NULL pointer.



    // C free() method
    // The “free” method in C is used to deallocate the memory that was previously allocated using
    malloc() or calloc(). It takes a pointer to the memory block to be deallocated as an argument.The memory allocated using functions malloc() and calloc() is not de-allocated on their own.
    // Hence the free() method is used, whenever the dynamic memory allocation takes place. It helps to reduce wastage of memory by freeing it.

    // For Example:
    // free(ptr);




    // C realloc() method
    “realloc” or “re-allocation” method in C is used to dynamically change the memory allocation of a previously allocated memory. In other words, if the memory previously allocated with the help of malloc or calloc is insufficient, realloc can be used to dynamically re-allocate memory. re-allocation of memory maintains the already present value and new blocks will be initialized with the default garbage value.

    ptr = realloc(ptr, newSize);
    where ptr is reallocated with new size 'newSize'.


    */
}