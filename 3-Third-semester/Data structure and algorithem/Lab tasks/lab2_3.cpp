		//lab2_4

#include <iostream>
using namespace std;
main()
{
	int n=5;
	int arr[n];
	int pos;
	cout <<"\nenter elements of arry  \n";
	for (int i=0;i<n;i++)
	{
		cin>>arr[i];
		
	}
	cout<<"\nenter the index from where you want to delete element  ";
	cin>>pos;
	
	for (int i=pos;i<n;i++)
	{
		arr[i]=arr[i+1];
	}
	
	
	for (int i=0;i<n-1;i++)
	{
	cout<<arr[i]<<endl;
	}
	
	
	
	
	
}
