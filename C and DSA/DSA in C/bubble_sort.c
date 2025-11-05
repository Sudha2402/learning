#include <stdio.h>
#include <stdlib.h>

void bubbleSort(int *arr, int size)
{
    int i, j, temp;
    for (i = 0; i < size - 1; i++)
    {
        for (j = 0; j < size - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])//swap
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return;
}

// Optimized Bubble sort in C
void bubbleSortOptimized(int array[], int size) {

  // loop to access each array element
  for (int step = 0; step < size - 1; ++step) {
    
    // check if swapping occurs  
    int swapped = 0;
    
    // loop to compare array elements
    for (int i = 0; i < size - step - 1; ++i) {
      
      // compare two array elements
      // change > to < to sort in descending order
      if (array[i] > array[i + 1]) {
        
        // swapping occurs if elements
        // are not in the intended order
        int temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        
        swapped = 1;
      }
    }
    
    // no swapping means the array is already sorted
    // so no need for further comparison
    if (swapped == 0) {
      break;
    }
    
  }
}











void printArray(int *arr, int size){
    for(int i=0;i<size-1;i++){
        printf("%d ",arr[i]);

    }
    printf("\n");
    return;
}

int main()
{
    printf("Hello bubble sort...\n");
    int arr[] = {64, 34, 25, 12, 22,11, 90, 50, 41, 35};
    
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("Original array: \n");
    printArray(arr, n);


    bubbleSortOptimized(arr, n);
    printf("Sorted array: \n");
    printArray(arr, n);



    bubbleSort(arr, n);
    printf("Sorted array: \n");
    printArray(arr, n);

    printf("\n");

    

    return 0;
}

/*
Original array: 
64 34 25 12 22 11 90 50 41
Sorted array:
11 12 22 25 34 35 41 50 64
*/