// For Loop Assignment

/*
    Name: Abdul Moiz Lakhani
    Batch: 4.1
    Section: Bright
    Roll No: 5093
*/


// Program  # 1

/*document.write("<h3>Program # 1:</h3>");

for(var x = 0; x<5; x++)
{
    document.write("Hello World!" + "<br>");
}*/

// Program  # 2

/*document.write("<h3>Program # 2:</h3>");

for(var count = 1; count<=10; count++)
{
    document.write(count + "<br>");
}*/

// Program  # 3

/*document.write("<h3>Program # 3:</h3>");

var tableNum = parseInt(prompt("Enter the Number to print it's Multiplication Table"));
var tableNum1 = parseInt(prompt("Enter the Length of Multiplication Table"));

document.write("Multiplication Table of " + tableNum + "<br>");
document.write("Length = " + tableNum1 + "<br><br>");

for(var y = 1; y<=tableNum1; y++)
{
    document.write(tableNum + " x " + y + " = " + (tableNum*y) + "<br>" );
}*/

// Program  # 4

/*document.write("<h3>Program # 4:</h3>");

var A = ["Nokia","Samsung","Apple","Sonny","Huawei"];

for(var z = 0; z<A.length; z++)
{
    document.write(A[z] + "<br>");
}*/

// Program  # 5

/*document.write("<h3>Program # 5:</h3>");

var fruits = ["Apple","Banana","Mango","Orange","Strawberry"];

for(var z = 0; z<fruits.length; z++)
{
    document.write(fruits[z] + "<br><br>");
}
for(var z = 0; z<fruits.length; z++)
{
    document.write("Element at index " + z + " is " + fruits[z] + "<br>");
}
*/

// Program  # 6

/*document.write("<h3>Program # 6:</h3>");

var numofItem = parseInt(prompt("Enter the Number of Item/Items"));
var items = [];

for(var getItems = 0; getItems < numofItem; getItems++)
{
    items[getItems] = prompt("Enter item name of Index " + getItems);
}

document.write("Number of Items = " + items.length + "<br>");
document.write("<h3>Items:</h3>");

for(getItems = 0; getItems < items.length; getItems++)
{
    document.write(items[getItems] + "<br>");
}*/

// Program  # 7

/*document.write("<h3>Program # 7:</h3>");

document.write("<h4>Counting:</h4>");

for(var i = 1; i <= 15; i++ )
{
    document.write(i + ", ");
}

document.write("<h4>Reverse Counting:</h4>");

for(var i = 10; i >= 1; i-- )
{
    document.write(i + ", ");
}

document.write("<h4>Even:</h4>");

for(var i = 0; i <= 20; i+=2 )
{
    document.write(i + ", ");
}

document.write("<h4>Odd:</h4>");

for(var i = 1; i <= 20; i+=2 )
{
    document.write(i + ", ");
}

document.write("<h4>Series:</h4>");

for(var i = 2; i <= 20; i+=2 )
{
    document.write(i + "k, ");
}*/

// Program  # 8

/*document.write("<h3>Program # 8:</h3>");

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var matchFount = false;

var order = prompt("Welcome to ABC Bakery. What do you want to Order Sir/Ma'am?");

for(var i = 0; i < bakery.length; i++)
{
    if( order === bakery[i] )
    {
        matchFount = true;
        document.write(order + " is <b>available</b> at index " + i + " in our Bakery");

        break;
    } 
}

if(matchFount === false)
{
    document.write("We are Sorry. " + order + " is <b>not available</b> in our bakery.");
}*/

/*// Program  # 9

document.write("<h3>Program # 9:</h3>");

var arr = [24,53,78,91,12];
var largest = 0;

document.write("Array Items: " );

for(i = 0; i < arr.length; i++)
{
    document.write(arr[i] + ", ");

    if(arr[i] > largest)
    {
        largest = arr[i];
    }
}

document.write("<br><br>The Largest Number is " + largest);
*/

// Program  # 10

/*document.write("<h3>Program # 10:</h3>");

var arr = [24,53,78,91,12];
var smallest, largest = 0;

document.write("Array Items: " );

for(i = 0; i < arr.length; i++)
{
    document.write(arr[i] + ", ");

    if(arr[i] > largest)
    {
        largest = arr[i];
    }
}

for(i = 0; i < arr.length; i++)
{
    if(arr[i] < largest)
    {
        smallest = arr[i];
    }
}

document.write("<br><br>The Smallest Number is " + smallest);
*/

// Program  # 11

/*document.write("<h3>Program # 11:</h3>");

var arr = [24,53,78,91,12];
var smallest, largest = 0;

document.write("Array Items: " );

for(i = 0; i < arr.length; i++)
{
    document.write(arr[i] + ", ");

    if(arr[i] > largest)
    {
        largest = arr[i];
    }
}

for(i = 0; i < arr.length; i++)
{
    if(arr[i] < largest)
    {
        smallest = arr[i];
    }
}

document.write("<br><br>The Largest Number is " + largest);
document.write("<br>The Smallest Number is " + smallest);
*/

// Program  # 12

/*document.write("<h3>Program # 12:</h3>");

var range = [];

for(var i = 0; i <= 19; i++)
{
    range[i] = (i+1) * 5;
}

document.write("<h4>Range Multiple of 5:</h4> " + range);
*/

// Program  # 12

document.write("<h3>Program # 12:</h3>");

var range = [];

for(var i = 0; i <= 19; i++)
{
    range[i] = (i+1) * 5;
}

document.write("<h4>Range Multiple of 5:</h4> " + range);