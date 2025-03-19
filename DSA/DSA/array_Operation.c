#include <stdio.h>

int capacity = 5, used_size = 3;

void traversal(int arr[], int n)
{
    printf("Traversing the Array...\n");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

void indexInsertion(int arr[], int element, int index)
{
    if (used_size >= capacity)
    { // undefined if not in parameter but in main , main is also a kind of block , it need to pass in function but making capacity=5,used_size=3; global will not let it to be undefiend
        printf("Array is full\n");
        return -1; // fail and exit
    }
    else
    {
        // if (index < used_size)
        // { //whwts the need infect it will give abstruct result

        /*
         for(int i=index;i<=used_size;i++){

            // // wrong logic

            // arr[i+1]=arr[i];//it wiil destroy the value of arr[i+1] hence it will not give correct output . hence for shifting use reverse iteration from used size to index with decrement

         }

         */

        printf("used_size : %d \n", used_size); // used_size : 3 //used_size : 4

        for (int i = used_size - 1; i >= index; i--) // if i >= index have not been used then it would have given abstruct result 16(here 16 might be to show the bytes upto here that is 4th position) instead of 3 ,Traversing the Array...1 2 45 16 5//here equal to is necessary as if i=2 at start and index is also 2 then it need to shilf atleast once
        {

            arr[i + 1] = arr[i];
        }
        arr[index] = element;
        // }
    }
}

int indexDeletion(int arr[], int index)
{
    if (index > used_size)
    {
        printf("arr[%d] is already empty \n", index);
        return -1; // fail and exit
    }
    else
    {
        for (int i = index; i <= used_size; i++)
        {
            {
                arr[index] = arr[i + 1];
            }
        }
        used_size--; // this affects the global variable directly and thereafter used size any where will show this result or instead of decreasinf the size here , make it at main also like size-=1;
        printf("used_size : %d \n", used_size);
    }
}

int linearSearch(int arr[], int element_Search)
{
    int flag = 0;
    for (int i = 0; i < used_size; i++)
    {
        int elementTraverse = arr[i];
        if (elementTraverse == element_Search)
        {
            printf("element %d is found at index %d\n", element_Search, i);
            flag = 1;
            return i;
            // break;//no need
        }
        //         else if (elementTraverse != element_Search && i=used_size){// lvalue required as left operand of assignment

        // printf("element %d is not found\n", arr[i]);
        //         }

        else
        {
            printf("element %d is not found at index %d\n", element_Search, i);
            // continue;
        }
    }

    if (flag == 0)
    {
        printf("element %d is not found\n", element_Search); // element 6 is not found
    }

    //     if (elementTraverse != element_Search && i=used_size){// lvalue required as left operand of assignment //not works here outside also

    // printf("element %d is not found\n", arr[i]);
    //         }

    return -1; // used to show that element is not found
}

int binarySearch(int arr[], int size, int element_Search)
{
    int low = 0, mid, high = size - 1;
    int flag = 0;
    while (low <= high)
    {
        mid = (low + high) / 2;

        if (arr[mid] == element_Search)
        {
            printf("element %d is found at index %d\n", element_Search, mid);
            flag = 1;
            return mid; // here mid act as index
        }
        else if (element_Search < arr[mid])
        {
            high = mid - 1; // this will only let to search in left half
        }
        else
        {
            low = mid + 1;
        }
    }

    if (flag == 0)
    {
        printf("element %d is not found\n", element_Search); // element 6 is not
    }
    return -1; // used to show that element is not found
}

int main()
{
    printf("the array given as :");
    // int capacity=5,used_size=3;
    int arr[capacity];
    // manually assign the value in array if arr[capacity]; is declared then it can't be redeclare with arr[used_size] and it will give error hence either use int arr[capacity]={1,2,3} or manully by passing
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;

    // OR used in one line
    //  arr={1,2,3};//error as [] not used
    //  arr[]={1,2,3};//error as [size] not used
    //  arr[used_size]={1,2,3};//error] as it is alreadydeclared //expected an expressionC/C++(29)

    traversal(arr, used_size);
    printf("\n");

    indexInsertion(arr, 45, 2);
    used_size++;
    traversal(arr, used_size);
    indexInsertion(arr, 5, 4);
    used_size++;
    printf("used_size : %d \n", used_size); // used_size : 5
    traversal(arr, used_size);
    indexDeletion(arr, 5); // used_size : 4
    // size-=1;
    traversal(arr, used_size);
    printf("used_size : %d \n", used_size); // used_size : 4
    printf("capacity : %d \n", capacity);   // capacity : 5 as per the     indexInsertion where capacity is set 5

    linearSearch(arr, 6);
    linearSearch(arr, 45); // element 45 is found at index 2

    /*
    element 6 is not found at index 0
element 6 is not found at index 1
element 6 is not found at index 2
element 6 is not found at index 3
element 45 is not found at index 0
element 45 is not found at index 1
element 45 is found at index 2


    */

    int arr2[] = {2, 5, 4, 8, 5, 0};
    int size2 = sizeof(arr2) / sizeof(int);
    traversal(arr2, size2);
   
    printf("size of arr2 is :%d\n", size2); // size of arr2 is :6
    int binary_element = 6;
    // binarySearch(arr2,size2, 6);
    //    int binarySearchIndex=binarySearch(arr2,size2, 6);
    int binarySearchIndex = binarySearch(arr2, size2, binary_element);
    printf("element %d is found at index %d\n", binary_element, binarySearchIndex); // element 6 is found at index -1
    int binarySearchIndex2 = binarySearch(arr2, size2, 8);                           // element 8 is not found//we get this because of unsorted array
    printf("element %d is found at index %d\n", 8, binarySearchIndex);              // element 6 is found at index -1

    int arr3[] = {2, 5, 8, 10, 39}; // sorted array
    int size3 = sizeof(arr3) / sizeof(int);
    traversal(arr3, size3);
    printf("size of arr3 is :%d\n", size3); // size of arr2 is :6
    int binary_element3 = 10;
    int binarySearchIndex3 = binarySearch(arr3, size3, binary_element3);
    printf("element %d is found at index %d\n", binary_element3, binarySearchIndex3); // element 6 is found at index -1

    /*In case of insorted array , first sort it for binary search or define array which is already sorted in ascending order
    
Traversing the Array...
2 5 8 10 39
size of arr3 is :5
element 10 is found at index 3
element 10 is found at index 3
    */

    return 0;
}