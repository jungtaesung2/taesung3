interface User {
  userid: number;
  password: string; 
  nickname: string;
  point: number; 
  role: 'admin' | 'user';
}

interface Performance {
  title: string;
  content: string;
  image: string;
  place: string;
  seat: string;
  category: string;
  performanceDate: string; 
  performanceTime: string; 
}

interface Reservation {
  performanceTitle: string;
  place: string; 
  price: string; 
}

let performanceDates: string[] = []; 
let performanceTimes: string[] = []; 
let reservations: Reservation[] = [];
let performances: Performance[] = [];

function isAdmin(user: User): boolean {
  return user.role === 'admin';
}

// 공연 등록 API
function newPerformance(user: User, performanceData: { 
  title: string;
  content: string;
  dates: string[]; 
  place: string;
  seat: string;
  image: string;
  category: string;
}): void {
  if (!isAdmin(user)) {
    console.log("권한이 없습니다.");
    return;
  }

  const newPerformance: Performance = {
    title: performanceData.title,
    content: performanceData.content,
    image: performanceData.image,
    place: performanceData.place,
    seat: performanceData.seat,
    category: performanceData.category,
    performanceDate: performanceData.dates[0], 
    performanceTime: "" 
  };

  performances.push(newPerformance);
}

//공연검색 api
function foundPerformance(title: string): Performance[] {
  const filteredPerformances = performances.filter(performance => performance.title.toLowerCase().includes(title.toLowerCase()));
  return filteredPerformances;
}