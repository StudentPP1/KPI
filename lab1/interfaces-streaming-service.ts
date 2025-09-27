type UUID = string;
type DateISO = `${number}-${number}-${number}`; // YYYY-MM-DD
type DateTimeISO = `${number}-${number}-${number}T${number}:${number}:${number}Z`; // ISO 8601 UTC

enum SubscriptionStatus {
  ACTIVE = "ACTIVE",
  CANCELLED = "CANCELLED",
  EXPIRED = "EXPIRED",
}

enum PaymentStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  REFUNDED = "REFUNDED",
}

interface Actor {
  actor_id: UUID;              // PK
  name: string;
  surname: string;
  biography?: string;
}

interface Director {
  director_id: UUID;           // PK
  name: string;
  surname: string;
  biography?: string;
}

interface Movie {
  movie_id: UUID;              // PK
  title: string;
  description?: string;
  year: number;
  rating?: number;
  director_id: UUID;           // FK 
}

interface Performance {
  performance_id: UUID;        // PK
  character_name?: string;
  description?: string;
  actor_id: UUID;              // FK 
  movie_id: UUID;              // FK 
}

interface SubscriptionPlan {
  subscription_plan_id: UUID;  // PK
  name: string;
  description?: string;
  price: number;               
  duration: number;            
}


interface IncludedMovie {
  movie_id: UUID;              // FK (PK part)
  subscription_plan_id: UUID;  // FK (PK part)
}

interface User {
  user_id: UUID;               // PK
  name: string;
  surname: string;
  email: string;
  password: string;       
  birthday?: DateISO;
  user_subscription_id?: UUID; // FK 
}

interface UserSubscription {
  user_subscription_id: UUID;  // PK
  user_id: UUID;               // FK 
  subscription_plan_id: UUID;  // FK 
  start_time: DateTimeISO;
  end_time?: DateTimeISO;    
  status: SubscriptionStatus;
}

interface Payment {
  payment_id: UUID;            // PK
  timestamp: DateTimeISO;
  amount: number;
  status: PaymentStatus;
  subscription_plan_id: UUID;  // FK
  user_id: UUID;               // FK 
}
