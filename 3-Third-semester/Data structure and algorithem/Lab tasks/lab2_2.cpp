		//lab2_3

#include <iostream>
using namespace std;
main()
{
	int arr[10];
	int n=0,num;
	cout <<"\nenter elements of arry  \n";
	for (int i=0;i<10;i++)
	{
		cin>>arr[i];
		
	}
	cout<<"\nenter the number you want to search   ";
	cin>>num;
	for (int i=0;i<10;i++)
	{
		if(num==arr[i])
		{
			n++;
			cout<<endl<<num<<"   found at  "<<i;
		}
	}
	cout<<endl<<num<< "    found  "<<n<<"  times";
	
	
	
	
}
