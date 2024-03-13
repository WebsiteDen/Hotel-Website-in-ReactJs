import BestData from "./BestData";
import "./BestStyles.css";
import BudgetHotel1 from "../assets/budget-hotel-attraction-img-1-min.jpg";
import BudgetHotel2 from "../assets/budget-hotel-attraction-img-2-min.jpg";
import BudgetHotel3 from "../assets/budget-hotel-attraction-img-3-min.jpg";
import BudgetHotel4 from "../assets/budget-hotel-attraction-img-4-min.jpg";
import BudgetHotel5 from "../assets/budget-hotel-attraction-img-5-min.jpg";
import BudgetHotel6 from "../assets/budget-hotel-attraction-img-6-min.jpg";


const Best =()=>{
    return(
         <div className="OurBest">
              <div className="Bestcol-1">
                  <h3>Best of San Fransisco</h3>
                  <a href="/">See All</a>
              </div>
              
                <div className="Bestcard">
                      <BestData
                       image={BudgetHotel1}
                       heading="Alcatraz Island"
                       text="
                       Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue
                        consequat ultrices in mollis netus."
                        more="Learn More &nbsp;&rarr;"

                      />
                            <BestData
                       image={BudgetHotel2}
                       heading="Fisherman's Wharf"
                       text="
                       Augue donec sit vestibulum amet luctus cras sagittis, 
                       ac rutrum tincidunt accumsan at posuere urna.."
                        more="Learn More &nbsp;&rarr;"

                      />
                              <BestData
                       image={BudgetHotel3}
                       heading="Fisherman's Wharf"
                       text="
                       Augue donec sit vestibulum amet luctus cras sagittis, 
                       ac rutrum tincidunt accumsan at posuere urna.."
                        more="Learn More &nbsp;&rarr;"

                      />
                      
                </div>
                <div className="Bestcard">
                      <BestData
                       image={BudgetHotel4}
                       heading="Queen Wilhelmina Garden"
                       text="
                       Placerat vel laoreet purus, mattis id neque convallis nunc, tincidunt massa at."
                        more="Learn More &nbsp;&rarr;"

                      />
                            <BestData
                       image={BudgetHotel5}
                       heading="Ocean Beach"
                       text="
                       Risus facilisis porttitor lacus venenatis 
                       felis scelerisque lorem ut cras mi venenatis 
                       viverra diam sed dui."
                        more="Learn More &nbsp;&rarr;"

                      />
                              <BestData
                       image={BudgetHotel6}
                       heading="Dutch Windmill"
                       text="
                       Neque ut et velit dictum molestie at pellentesque 
                       aliquet magna ut tincidunt ullamcorper mauris mi et."
                        more="Learn More &nbsp;&rarr;"

                      />
                      
                </div>
              </div>
    )
}

export default Best;