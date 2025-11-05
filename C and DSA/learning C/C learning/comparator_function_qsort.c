/*
// Comparator Function in qsort()
The key point about qsort() is the comparator() function. The comparator function takes two arguments and contains logic to decide their relative order in the sorted output. The idea is to provide flexibility so that qsort() can be used for any type (including user-defined types) and can be used to obtain any desired order (increasing, decreasing, or any other).

The comparator function takes two pointers as arguments (both type-casted to const void*) and defines the order of the elements by returning (in a stable and transitive manner

// Prototype of comparator() function
int comparator(const void* p1, const void* p2);

// Parameters
p1 and p2: These are the pointer to the elements to be compared.
// Return Value
The comparator function should only return the following values:

( <0 ): Less than zero, if the element pointed by p1 goes before the element pointed by p2.
( 0 ): Zero, if the element pointed by p1 is equivalent to the element pointed by p2.
( >0 ): Greater than zero, if the element pointed by p1 goes after the element pointed by p2.
*/



// C program to illustrate the use of comparator function in
// qsort()
#include <stdio.h>
#include <stdlib.h>

/*
struct Student
{
   int age, marks;
   char name[20];
};

//  to sort the students based on marks in ascending order. The comparator function will look like this:

int comparator(const void* p, const void* q)
{
   int l = ((struct Student*)p)->marks;
   int r = ((struct Student*)q)->marks;
 return (l - r);
}

*/



// This function is used in qsort to decide the relative
// order of elements at addresses p and q.
int comparator(const void* p, const void* q)
{
    // Get the values at given addresses
    int l = *(const int*)p;
    int r = *(const int*)q;
  // both odd, put the greater of two first.
    if ((l & 1) && (r & 1))
        return (r - l);

    // both even, put the smaller of two first
    if (!(l & 1) && !(r & 1))
        return (l - r);

    // l is even, put r first
    if (!(l & 1))
        return 1;

    // l is odd, put l first
    return -1;
}


// A utility function to print an array
void printArr(int arr[], int n)
{
    int i;
    for (i = 0; i < n; ++i)
        printf("%d ", arr[i]);
}

// Driver program to test above function
int main()
{
    int arr[] = { 1, 6, 5, 2, 3, 9, 4, 7, 8 };

    int size = sizeof(arr) / sizeof(arr[0]);
    qsort((void*)arr, size, sizeof(arr[0]), comparator);

    printf("Output array is\n");
    printArr(arr, size);

    /*
Output array is
9 7 5 3 1 2 4 6 8
    */

    return 0;
}