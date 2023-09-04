import { jsx as _jsx } from "react/jsx-runtime";

// Dashboard
import Admin from "../pages/Dashboard/Admin";
import Parents from "../pages/Dashboard/Parents";
import Student from "../pages/Dashboard/Student";

// Students
import AllStudents from "../pages/Students/AllStudents";
import StudentDetails from "../pages/Students/StudentDetails";
import AdmitForm from "../pages/Students/AdmitForm";
import StudentPromotion from "../pages/Students/StudentPromotion";

// Teachers
import AllTeachers from "../pages/Teachers/AllTeachers";
import TeacherDetails from "../pages/Teachers/TeacherDetails";
import AddTeacher from "../pages/Teachers/AddTeacher";

// Parents
import AllParents from "../pages/Parents/Parents";

// Library
import AllBooks from "../pages/Library/AllBooks";
import AddBook from "../pages/Library/AddBook";

// Account
import FeesCollection from "../pages/Account/FeesCollection";
import CreateStudentPayment from "../pages/Account/CreateStudentPayment";
import AllExpenses from "../pages/Account/AllExpenses";
import AddExpenses from "../pages/Account/AddExpenses";

// Class
import AllClass from "../pages/Class/AllClass";
import AddNewClass from "../pages/Class/AddNewClass";

// Subject
import Subjects from "../pages/Subject/Subject";

// Class Routine
import ClassRoutine from "../pages/ClassRoutine/ClassRoutine";

// Attendance
import Attendance from "../pages/Attendance/Attendance";

// Exam
import ExamSchedule from "../pages/Exam/ExamSchedule";
import ExamGrades from "../pages/Exam/ExamGrades";

// Transport
import Transport from "../pages/Transport/Transport";

// Hostel
import Hostel from "../pages/Hostel/Hostel";

// Noticeboard
import Notice from "../pages/Notice/Notice";

// Map
import Map from "../pages/Map/Map";

const routes = [
  {
    id: 1,
    path: "/",
    element: _jsx(Admin, {}),
  },
  {
    id: 2,
    path: "/student",
    element: _jsx(Student, {}),
  },
  {
    id: 3,
    path: "/parents",
    element: _jsx(Parents, {}),
  },
  {
    id: 4,
    path: "/all-students",
    element: _jsx(AllStudents, {}),
  },
  {
    id: 5,
    path: "/student-details",
    element: _jsx(StudentDetails, {}),
  },
  {
    id: 6,
    path: "/admit-form",
    element: _jsx(AdmitForm, {}),
  },
  {
    id: 7,
    path: "/student-promotion",
    element: _jsx(StudentPromotion, {}),
  },
  {
    id: 8,
    path: "/all-teachers",
    element: _jsx(AllTeachers, {}),
  },
  {
    id: 9,
    path: "/teacher-details",
    element: _jsx(TeacherDetails, {}),
  },
  {
    id: 10,
    path: "/add-teacher",
    element: _jsx(AddTeacher, {}),
  },
  {
    id: 11,
    path: "/all-parents",
    element: _jsx(AllParents, {}),
  },
  {
    id: 12,
    path: "/all-books",
    element: _jsx(AllBooks, {}),
  },
  {
    id: 13,
    path: "/add-book",
    element: _jsx(AddBook, {}),
  },
  {
    id: 14,
    path: "/fees-collection",
    element: _jsx(FeesCollection, {}),
  },
  {
    id: 15,
    path: "/create-student-payment",
    element: _jsx(CreateStudentPayment, {}),
  },
  {
    id: 16,
    path: "/all-expenses",
    element: _jsx(AllExpenses, {}),
  },
  {
    id: 17,
    path: "/add-expenses",
    element: _jsx(AddExpenses, {}),
  },
  {
    id: 18,
    path: "/all-class",
    element: _jsx(AllClass, {}),
  },
  {
    id: 19,
    path: "/add-new-class",
    element: _jsx(AddNewClass, {}),
  },
  {
    id: 20,
    path: "/subjects",
    element: _jsx(Subjects, {}),
  },
  {
    id: 21,
    path: "/class-routine",
    element: _jsx(ClassRoutine, {}),
  },
  {
    id: 22,
    path: "/attendance",
    element: _jsx(Attendance, {}),
  },
  {
    id: 23,
    path: "/exam-schedule",
    element: _jsx(ExamSchedule, {}),
  },
  {
    id: 24,
    path: "/exam-grades",
    element: _jsx(ExamGrades, {}),
  },
  {
    id: 25,
    path: "/transport",
    element: _jsx(Transport, {}),
  },
  {
    id: 26,
    path: "/hostel",
    element: _jsx(Hostel, {}),
  },
  {
    id: 27,
    path: "/notice",
    element: _jsx(Notice, {}),
  },
  {
    id: 28,
    path: "/map",
    element: _jsx(Map, {}),
  },
];

export default routes;
