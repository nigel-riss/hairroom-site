function Tabs() {
    // $(".tabs__list-item--current").addClass("tabs__active-bg");
    // $(".tabs__list-item").on("click", TabsChanged);

    // function TabsChanged() {
    //     let tab_id = $(this).attr('data-tab');
    //     $(".tabs__list-item").removeClass("tabs__list-item--current tabs__active-bg");
    //     $(".tabs__content").removeClass("tabs__content--current");
    //     $(this).addClass("tabs__content--current");
    //     $("#"+tab_id).addClass("tabs__list-item--current");
    // }

    // Define vars
    const TabItem = document.getElementsByClassName(".tabs__list-item");
    const TabContent = document.querySelector(".tabs__content");

    // Event Listener
    TabItem.addEventListener("click",function() {
        // TabItem.classList.remove("tabs__list-item--current", "tabs__active-bg");
        comsole.log("works");
    });

    // function TabsChanged() {
    //     TabItem.classList.remove("tabs__list-item--current", "tabs__active-bg");
    //     // TabContent.classList.remove("tabs__content--current");
    //     // TabContent.classList.add("tabs__content--current");
    // }
}
export default Tabs;