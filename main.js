var names_of_student_array = [];
function submit()
{
    var display = [];
    for (var j = 1; j <= 4; j++)
    {
     var names_of_student = document.getElementById("name_of_the_student_"+j).value;
     console.log(names_of_student)
     names_of_student_array.push(names_of_student);
    }
    var length_of_display = names_of_student_array.length;
    for (var k = 0; k < length_of_display; k++)
{
    display.push("<h4>NAME - "+ names_of_student_array[k] +"</h4>");
    console.log(display);
}
document.getElementById("display_name_with_commas").innerHTML = display;
var remove_comma = display.join(" ");
document.getElementById("display_name_without_commas").innerHTML = remove_comma;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}
function sorting()
{
    names_of_student_array.sort();
    var display_sort = []
    var length_of_display = names_of_student_array.length;
    for (var k = 0; k < length_of_display; k++)
{
    display_sort.push("<h4>NAME - "+ names_of_student_array[k] +"</h4>");
    console.log(display_sort);   
}
var remove_comma = display_sort.join(" ");
document.getElementById("display_name_without_commas").innerHTML = remove_comma;
document.getElementById("sort_button").style.display = "none";
document.getElementById("submit_button").style.display = "inline-block";
document.getElementById("update_button").style.display = "inline-block";
}
function update()
{
    document.getElementById("display_name_without_commas").innerHTML = "<h1>"+ names_of_student_array+ "</h1>"; 
}