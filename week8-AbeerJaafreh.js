//Q1
var animals=new Animal('Lussy','Dog')
function Animal(animalName,type)
{
    this.name=animalName;
    this.type=type;
    Animal.prototype.getAnimalName=function()
    {
        return animalName;
    }

    Animal.prototype.createElement=function()
    {

    }
}
console.log(animals);


//-----------------------------------------------------------------
//Q2
class shape(height,length,area)
{
    constructor(heig,len,area)
    {
        this.height=heig;
        this.length=len;
        this.area=area;
    }
    function getteArea(area)
    {return area;}

}
var measure=new shape("13 CM","12 CM","256 CM2");
//---------------------------------------------------------------
//Q3
var array=['Food','Pasta','Pizza','Eat'];
var newArray=array.filter(array=>array.length<=4);

console.log(newArray);