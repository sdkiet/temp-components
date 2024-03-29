// import * as React from "react";
// import Paper from "@material-ui/core/Paper";
// import {
//   Scheduler,
//   WeekView,
//   MonthView,
//   Appointments,
//   AppointmentTooltip,
//   AppointmentForm,
// } from "@devexpress/dx-react-scheduler-material-ui";

// import appointments from "./demo-data/today-appointments";

// export default class APP extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: appointments,
//     };
//   }

//   render() {
//     const { data } = this.state;

//     return (
//       <Paper>
//         <Scheduler data={data} height={660}>
//           <MonthView startDayHour={9} endDayHour={19} />

//           <Appointments />
//           <AppointmentTooltip showCloseButton showOpenButton />
//           <AppointmentForm readOnly />
//         </Scheduler>
//       </Paper>
//     );
//   }
// }
