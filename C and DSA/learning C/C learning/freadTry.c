#include <stdio.h> 
 
typedef struct { 
    int id; 
    float value; 
} Record; 
 
void writeRecords(const char *filename) { //writeRecords(filename); 
    FILE *file = fopen(filename, "wb"); 
    Record records[] = { 
        {1, 10.5}, 
        {2, 20.5}, 
        {3, 30.5}  // Last record 
    }; 
     
    fwrite(records, sizeof(Record), 3, file); 
    fclose(file); 
} 
 
 /*
void readRecords(const char *filename) { 
    FILE *file = fopen(filename, "rb"); 
    Record record; 
 
    while (fread(&record, sizeof(Record), 1, file) == 1) { 
        printf("ID: %d, Value: %.2f\n", record.id, record.value); 
    } 
 
    fclose(file); 
} 
*/


void readRecords(const char *filename) { 
    FILE *file = fopen(filename, "rb"); 
    Record record; 
 
    // Read until end of file 
    while (fread(&record, sizeof(Record), 1, file) == 1) { 
        printf("ID: %d, Value: %.2f\n", record.id, record.value); 
    } 
 
    fclose(file); 
} 



 
int main() { 

    const char *filename = "data.bin"; 
    writeRecords(filename); 
    readRecords(filename); 

/*
ID: 1, Value: 10.50
ID: 2, Value: 20.50
ID: 3, Value: 30.50
*/


    return 0; 
} 