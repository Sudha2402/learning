// Heap Sort in C
  
#include <stdio.h>
  
// Function to swap the the position of two elements
void swap(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

void heapify(int arr[], int n, int i) {
  // Find largest among root, left child and right child
  int largest = i;
  int left = 2 * i + 1;
  int right = 2 * i + 2;

  printf("arr[largest] : %d ,arr[left] : %d,arr[right] : %d \n" ,arr[largest] ,arr[left],arr[right]);

  if (left < n && arr[left] > arr[largest])
    largest = left;

  if (right < n && arr[right] > arr[largest])
    largest = right;

  // Swap and continue heapifying if root is not largest
  if (largest != i) {
    swap(&arr[i], &arr[largest]);
    heapify(arr, n, largest);//to send the swap node to correct position from the root hence internal heapify is done
  }


}

// Main function to do heap sort
void heapSort(int arr[], int n) {
  
  // Build max heap
  for (int i = n / 2 - 1; i >= 0; i--){ //runs from 6/2-1=3-1=2  to 0 (3 times)// the first index of a non-leaf node is given by n/2 - 1. All other nodes after that are leaf-nodes and thus don't need to be heapified.
  printf("n / 2 - 1 value  in i : %d \n",i);//it is last parent node to the bottom//it is rightmost index which has just last leaf node in the child//if completely filled, let's n=14 then i=6 which is rightmost node of just one level up of leaf node//eg . starts from leftmost second level node as root if leftmost has leaf nodes and other in rightmost has no children. //if n=17 then leftmost node is 17/2-1=7 as int. 
    
  heapify(arr, n, i);
  }

  // Heap sort
  for (int i = n - 1; i >= 0; i--) {

    swap(&arr[0], &arr[i]);

    // Heapify root element to get highest element at root again
    heapify(arr, i, 0);//we try to get largest at index 0.hence heapify from there //i is the size passed//i keep decreasing means last node is removing from the heap

  }

}

// Print an array
void printArray(int arr[], int n) {
  for (int i = 0; i < n; ++i)
    printf("%d ", arr[i]);
  printf("\n");
}

// Driver code
int main() {
  // int arr[] = {1, 12, 9, 5, 6, 10};
  int arr[] = {1, 12, 9, 5, 6, 10,5,13,2,3,1,21,2,2,322,22,223}; //17

  int n = sizeof(arr) / sizeof(arr[0]);//6

  heapSort(arr, n);

  printf("Sorted array is \n");
  printArray(arr, n);
}





// Sorted array is 
// 1 5 6 9 10 12 