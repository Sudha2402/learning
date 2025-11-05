#include <stdio.h>
//all the below function declaration will work.
// int sum_of_Array(int arrayP[6] ,int size)
// void sum_of_Array(int arrayP[6] ,int size)
// void sum_of_Array(int arrayP[] ,int size)

// void sum_of_Array(char arrayP[] ,int size)//used when passes array datatype is char and %s is used , we have already done in string.c code
// or *arrayP instead of arrayP[] will work and others are as it is everywhere.``

void sum_of_Array(int *arrayP, int size)
{
    int sum = 0;

    // size = sizeof(arrayP); // size value is changed because size is passesd according to the main that is 24(int size = sizeof(arrayS)) but function takes the size as index number and hence we use the size (int size = sizeof(arrayS) / sizeof(arrayS[0]);//6) //6  and  pass the size from main using int size = sizeof(arrayS) / sizeof(arrayS[0]);//6 and taking it in parameter

    // int size= sizeof(arrayP);// warning: 'sizeof' on array function parameter 'arrayP' will return size of 'int *' that is 4
    // to resolve this problem take the size from main and pass it in parameter but in main use int size = sizeof(arrayS) / sizeof(arrayS[0]);//6

    printf("size of arrayP[6] :%d\n", size);//4//it gives size of int no the elements number // 6356740 //it gives 6 if passed from mains using int size = sizeof(arrayS) / sizeof(arrayS[0]);//6

    // for (int i = 1; i < sizeof (arrayP); i++) //declare sizeof (arrayP) above loop as it is overloading

    for (int i = 1; i <= size; i++)
    {
        sum += arrayP[i];
        printf("%d\n",arrayP[i]); //this can be used to get the array elemts
    }

    // return sum;
    printf("The sum is :%d\n", sum); // The sum is :2040792990 , at first when we passad int size = sizeof(arrayS); //58 , this result we get when we finally change the value of size to the number of element either by using size in function or using int size = sizeof(arrayS) / sizeof(arrayS[0]);//6 outside the function.

    return;
}

int main()
{
    int arrayS[6] = {3, 6, 4, 5, 43, 5};
    // sum_of_Array(arrayS);
    // printf("The sum of array: %d\n", sum_of_Array(arrayS));

    // getting the size of array
    // int size = sizeof(arrayS) / sizeof(arrayS[0]);//6 //displays the number of elements in array //as our system consider 4 bytes for integer
    // use this to pass size in main

    int size = sizeof(arrayS);           // size of array 24 //in mains //don't pass this value in function as function takes element number not bytes
    printf("size of array :%d\n", size); // size of array 6
    //  printf("The sum of array: %d\n", sum_of_Array(arrayS,size));//The sum of array: 23
    sum_of_Array(arrayS, size);




    // without using function
    int sum = 0;
    for (int i = 1; i <= size; i++)
    {
        // sum += arrayS[i];
        sum = sum + arrayS[i];
    }
    printf("The sum is without using function :%d\n", sum); // 2040678403

    // as we are note getting the right result , let's try to take input from user then find sum

    // let's assume the maximum array size as 100.
    // initialize sum as 0. Otherwise, it will take some garbage value.
    int arr[100], i;

    // Get size input from user
    printf("Enter array size\n");
    scanf("%d", &size);

    // Get all elements using for loop and store it in array
    printf("Enter array elements\n");
    for (i = 0; i < size; i++)
        scanf("%d", &arr[i]);
    sum = 0; // set it to 0 again otherwise it will keep abot sum value
    // add all elements to the variable sum.
    for (i = 0; i < size; i++)
        sum = sum + arr[i]; // same as sum += arr[i];

    // print the result
    printf("Sum of the array = %d\n", sum);

    /*
    Enter array size
    5
    Enter array elements
    3
    3
    34
    3
    3
    Sum of the array = 46

    */

    int a[100]; // Declare an array of size 100 to store integer values
    sum = 0;
    int n; // Declare variables to store array size, loop counter, and sum
    // Display a message to the user about the program's purpose
    printf("\n\nFind sum of all elements of array:\n");
    printf("--------------------------------------\n");
    // Prompt the user to input the number of elements to be stored in the array
    printf("Input the number of elements to be stored in the array :");
    scanf("%d", &n);
    // Prompt the user to input n elements into the array
    printf("Input %d elements in the array :\n", n);
    for (i = 0; i < n; i++)
    {
        printf("element - %d : ", i);
        scanf("%d", &a[i]); // Read the input and store it in the array
    }

    // Calculate the sum of all elements in the array using a for loop
    for (i = 0; i < n; i++)
    {
        sum += a[i]; // Add each element to the sum
    }
    // Display the sum of all elements stored in the array
    printf("Sum of all elements stored in the array is : %d\n\n", sum);

    return 0;
}