"use server";

import { revalidatePath } from "next/cache";
import { ID, Query } from "node-appwrite";

import { Appointment } from "@/types/appwrite.types";
import {
    APPOINTMENT_COLLECTION_ID,
    DATABASE_ID,
    databases,
    messaging,
  } from "../appwrite.config";
  import { formatDateTime, parseStringify } from "../utils";

export const createAppointment = async ( appointment: CreateAppointmentParams) => {
try {
    const newAppointment = await databases.createDocument(
        DATABASE_ID!,
        APPOINTMENT_COLLECTION_ID!,
        ID.unique(),
        appointment
      );
      
      
      return parseStringify(newAppointment); 
} catch (error) {
    console.error(error);
}
}