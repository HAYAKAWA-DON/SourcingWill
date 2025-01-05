function increasing_number(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const range = end-start;
    const grownum = range / ( duration / 16 );
    let temp = start;
    const step = () => {
        temp += grownum;
        if ((grownum > 0 && temp >= end) || ( grownum < 0 && temp <= end)) {
            temp = end;
            element.textContent = Intl.NumberFormat().format(Math.round(temp));
            return;
        }
        element.textContent = Intl.NumberFormat().format(Math.round(temp));
        requestAnimationFrame(step);
    }
    step();
}
// 四个数字分别动态展示。
increasing_number("dynamic_number_Products",0, 49526, 1500);
increasing_number("dynamic_number_Happy_Clients", 0, 6850, 1500);
increasing_number("dynamic_number_Years_of_Experience", 0, 26, 1500);
increasing_number("dynamic_number_Full_Time_Employees", 0, 137, 1500);
