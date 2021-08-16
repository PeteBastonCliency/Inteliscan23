import { Container, Card } from "react-bootstrap"

import Breadcrumbs from "../components/Breadcrumbs"
import PageHeader from "../components/PageHeader"
import moment from "moment"
import Calendar from "../components/Calendar"
import ExampleCode from "../components/ExampleCode"

export async function getStaticProps() {
  return {
    props: {
      title: "Calendar",
    },
  }
}

export default function componentsCalendar() {
  const todayDate = moment().startOf("day")
  const YM = todayDate.format("YYYY-MM")
  const YESTERDAY = todayDate.clone().subtract(1, "day").format("YYYY-MM-DD")
  const TODAY = todayDate.format("YYYY-MM-DD")
  const TOMORROW = todayDate.clone().add(1, "day").format("YYYY-MM-DD")
  const themeConfig = {
    // month day grid cell 'day'
    "month.weekend.backgroundColor": "#fafafa",
  }

  return (
    <Container fluid className="px-lg-4 px-xl-5">
      <Breadcrumbs title="Calendar" />
      <PageHeader title="Calendar" />
      <section>
        <Card className="mb-4">
          <Card.Header>
            <h4 className="card-heading">Calendar</h4>
          </Card.Header>
          <Card.Body>
            <p>
              A JavaScript event calendar. Customizable and open source. Display
              a full-size drag-n-drop event calendar.
            </p>
            <p>
              TOAST UI Calendar is great for displaying events, but it isn't a
              complete solution for event content-management. See more about
              this great plugin at{" "}
              <a href="https://github.com/nhn/toast-ui.react-calendar">
                TOAST UI React Calendar
              </a>
              .
            </p>
            <p>
              Theme has built in Next.js wrapper with dynamic import which you
              can find in <code>src/components/Calendar</code>
            </p>
            <ExampleCode highlightCode={highlightCode} bottomMargin />
            <Calendar
              height="900px"
              view="month"
              calendars={[
                {
                  id: "0",
                  name: "Private",
                  bgColor: "#4650dd",
                  borderColor: "#4650dd",
                  color: "#fff",
                },
                {
                  id: "1",
                  name: "Company",
                  bgColor: "#00a9ff",
                  borderColor: "#00a9ff",
                  color: "#fff",
                },
              ]}
              disableDblClick={true}
              disableClick={false}
              isReadOnly={false}
              month={{
                startDayOfWeek: 0,
              }}
              schedules={[
                {
                  calendarId: "0",
                  title: "All Day Event",
                  category: "time",
                  start: YM + "-01",
                },
                {
                  calendarId: "0",
                  title: "Long Event",
                  category: "time",
                  start: YM + "-07",
                  end: YM + "-10",
                },
                {
                  calendarId: "1",
                  category: "time",
                  id: 999,
                  title: "Repeating Event",
                  start: YM + "-09T16:00:00",
                },
                {
                  calendarId: "1",
                  title: "Repeating Event",
                  category: "time",
                  id: 999,
                  title: "Repeating Event",
                  start: YM + "-16T16:00:00",
                },
                {
                  calendarId: "1",
                  title: "Conference",
                  start: YESTERDAY,
                  end: TOMORROW,
                  category: "time",
                },
                {
                  calendarId: "0",
                  title: "Meeting",
                  start: TODAY + "T10:30:00",
                  end: TODAY + "T12:30:00",
                  category: "time",
                },
                {
                  calendarId: "0",
                  title: "Lunch",
                  category: "time",
                  start: TODAY + "T12:00:00",
                },
                {
                  calendarId: "0",
                  category: "time",
                  title: "Meeting",
                  start: TODAY + "T14:30:00",
                },
                {
                  calendarId: "0",
                  category: "time",
                  title: "Happy Hour",
                  start: TODAY + "T17:30:00",
                },
                {
                  calendarId: "1",
                  category: "time",
                  title: "Dinner",
                  start: TODAY + "T20:00:00",
                },
                {
                  calendarId: "0",
                  category: "time",
                  title: "Birthday Party",
                  start: TOMORROW + "T07:00:00",
                },
                {
                  calendarId: "0",
                  category: "time",
                  title: "Click for Google",
                  url: "http://google.com/",
                  start: YM + "-28",
                },
              ]}
              scheduleView
              taskView
              theme={themeConfig}
              timezones={[
                {
                  timezoneOffset: 540,
                  displayLabel: "GMT+09:00",
                  tooltip: "Seoul",
                },
                {
                  timezoneOffset: -420,
                  displayLabel: "GMT-08:00",
                  tooltip: "Los Angeles",
                },
              ]}
              useDetailPopup
              useCreationPopup
              week={{
                showTimezoneCollapseButton: true,
                timezonesCollapsed: true,
              }}
            />
          </Card.Body>
        </Card>
      </section>
    </Container>
  )
}

const highlightCode = `import Calendar from "../components/Calendar"
import moment from "moment"

export default function page(props) {
  const todayDate = moment().startOf("day")
  const YM = todayDate.format("YYYY-MM")
  const YESTERDAY = todayDate.clone().subtract(1, "day").format("YYYY-MM-DD")
  const TODAY = todayDate.format("YYYY-MM-DD")
  const TOMORROW = todayDate.clone().add(1, "day").format("YYYY-MM-DD")
  const themeConfig = {
    // month day grid cell 'day'
    "month.weekend.backgroundColor": "#fafafa",
  }
  return(
    <Calendar 
      height="900px"
      view="month"
      calendars={[
        {
          id: "0",
          name: "Private",
          bgColor: "#4650dd",
          borderColor: "#4650dd",
          color: "#fff",
        },
        {
          id: "1",
          name: "Company",
          bgColor: "#00a9ff",
          borderColor: "#00a9ff",
          color: "#fff",
        },
      ]}
      disableDblClick={true}
      disableClick={false}
      isReadOnly={false}
      month={{
        startDayOfWeek: 0,
      }}
      schedules={[
        {
          calendarId: "0",
          title: "All Day Event",
          category: "time",
          start: YM + "-01",
        },
        {
          calendarId: "0",
          title: "Long Event",
          category: "time",
          start: YM + "-07",
          end: YM + "-10",
        },
        {
          calendarId: "1",
          category: "time",
          id: 999,
          title: "Repeating Event",
          start: YM + "-09T16:00:00",
        },
        {
          calendarId: "1",
          title: "Repeating Event",
          category: "time",
          id: 999,
          title: "Repeating Event",
          start: YM + "-16T16:00:00",
        },
        {
          calendarId: "1",
          title: "Conference",
          start: YESTERDAY,
          end: TOMORROW,
          category: "time",
        },
        {
          calendarId: "0",
          title: "Meeting",
          start: TODAY + "T10:30:00",
          end: TODAY + "T12:30:00",
          category: "time",
        }
      ]}
      scheduleView
      taskView
      theme={themeConfig}
      timezones={[
        {
          timezoneOffset: 540,
          displayLabel: "GMT+09:00",
          tooltip: "Seoul",
        },
        {
          timezoneOffset: -420,
          displayLabel: "GMT-08:00",
          tooltip: "Los Angeles",
        },
      ]}
      useDetailPopup
      useCreationPopup
      week={{
        showTimezoneCollapseButton: true,
        timezonesCollapsed: true,
      }}
    />
  )
}`
