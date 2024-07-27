"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Appointment } from "@/types/appwrite.types";

import AppointmentForm from "./forms/AppointmentForm";

import "react-datepicker/dist/react-datepicker.css";


const AppointmentModal = ({
  patientId,
  userId,
  appointment,
  type,
}: {
  patientId: string;
  userId: string;
  appointment?: Appointment;
  type: "schedule" | "cancel";
  title: string;
  description: string;
}) => {

  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
    <Button
        variant="ghost"
        className={`capitalize ${type === "schedule" && "text-green-500"}`}
      >
        {type}
     </Button>
    </DialogTrigger>
    <DialogContent className="shad-dialog sm:max-w-md">
    <DialogHeader className="mb-4 space-y-3">
    <DialogTitle className="capitalize">{type} Appointment</DialogTitle>   
    <DialogDescription>
     Please fill in the following details to {type} appointment
     </DialogDescription>
    </DialogHeader>
    <AppointmentForm
      patientId={patientId}
      userId={userId}
      appointment={appointment}
      type={type}
      setOpen={setOpen}
      />
    </DialogContent>
    </Dialog>
  )
}

export default AppointmentModal  