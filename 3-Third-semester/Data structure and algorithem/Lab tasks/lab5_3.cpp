							//circuler que

#include<iostream>
using namespace std;
int size=5  ; 
int que[5];
int rear=-1;
int front=-1;

void enque(int );
void deque();
void show();
main()
{
	int n1,n2,n3,n4,n5,n6,n7;

	cout<<"enter the element of que \n";
	cin>>n1>>n2>>n3>>n4>>n5>>n6>>n7;
	enque(n1);
	enque(n2);
	enque(n3);
	enque(n4);
	enque(n5);
	
	deque();
	deque();

	enque(n6);
	enque(n7);

	show();
}
void enque(int n)
{
	if((rear==size-1 && front==0)||rear==front-1)
	{
		cout<<"overflow";
	}
	else if(rear==-1)
	{
	front=0;
	rear++;
	que[rear]=n;
	}
	else if(rear==size-1 && front>0)
	{
		rear=0;
		que[rear]=n;
		
	}
	else
	{
		rear++;
		que[rear]=n;
	}
}
void deque()
{
	if(front==-1)
	{
		cout<<"empty";
	}
	front++;
	
}
void show()
{
	cout<<"\n OUTPUT \n";
	
	if(front==-1)
	{
		cout<<"empty";
	}
	 if(front>0)
	{
	for(int i=front;i<size;i++)
	{
		cout<<que[i]<<endl;
	}
	for(int i=0;i<=rear;i++)
	{
		cout<<que[i]<<endl;
	}
	}
	else
	{
	for(int i=front;i<=rear;i++)
	{
		cout<<que[i]<<endl;
	}	
	}
	
}
