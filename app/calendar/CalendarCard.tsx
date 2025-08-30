"use client";

import FullCalendar  from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import {format} from "date-fns";
import { DatesSetArg } from '@fullcalendar/core';

import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { set } from 'mongoose';

const plugins = [dayGridPlugin, timeGridPlugin, interactionPlugin];
export default function Home() {
        const calendarRef = useRef<FullCalendar>(null);
        const [currentTitle, setCurrentTitle] = useState<string>('Loading....');
        const [view, setView] = useState<string>('dayGridWeek');

        const viewSet =useCallback((viewName : string) =>{
          calendarRef.current?.getApi().changeView(viewName);
          setView(viewName);
        }
          
          ,[])

        const funcPrevious = useCallback(() =>  calendarRef.current?.getApi().prev(), [])
         
        const funcNext = useCallback(() => calendarRef.current?.getApi().next(), [])

        const dateSet = useCallback((dateInfo: DatesSetArg) => {
          const date = format(dateInfo.view.currentStart, "MMMM yyyy");
          setCurrentTitle(date);
        }, [])

  return (
      <div className="p-6 pb-0 bg-white rounded-2xl max-h-[750px]  text-black">

      <div className="flex justify-between p-2">
      <div className="flex">
      <button className=''
      onClick={funcPrevious}>
       <Image
       src='/previmg.svg'
       alt=''
       width={24}
       height={21}
       ></Image>
      </button>
      <div className="text-[#303134] min-w-[220px] text-center text-poppins text-2xl font-bold [word-spacing:18px]">{currentTitle}</div>
      <button className=''
      onClick={funcNext}>
       <Image
       src='/nextimg.svg'
       alt=''
       width={24}
       height={21}
       ></Image>
      </button>
      </div>

      <div className="flex bg-red-100 rounded-3xl justify-center items-center gap-2"> 
        <div className={`min-w-[120px] cursor-pointer rounded text-center ${view==='dayGridDay' ? 'bg-white p-2 shadow-sm rounded-3xl' : '' }`}
        onClick={() => viewSet('dayGridDay')}
        >
          Daily
        </div>
        <div className={`min-w-[120px] cursor-pointer rounded text-center ${view==='dayGridWeek' ? 'bg-white p-2 shadow-sm rounded-3xl' : '' }`}
        onClick={() => viewSet('dayGridWeek')}
        >
          Weekly
        </div>
        <div className={`min-w-[120px] cursor-pointer rounded text-center ${view==='dayGridMonth' ? 'bg-white p-2 shadow-sm rounded-3xl' : '' }`}
        onClick={() => viewSet('dayGridMonth')}
        >
          Monthly
        </div>
      </div>          
      </div>

      
      <FullCalendar
      ref={calendarRef}
      datesSet={dateSet}
      plugins={plugins}
      initialView={view}
      editable={true}
      selectable={true}
      allDaySlot={false}
      headerToolbar={false}
  //  headerToolbar={{
  //   left: 'prev,title,next',
  //   center: 'timeGridDay,timeGridWeek,dayGridMonth',
  //   right: ''
  // }}
      events={[
        { title: 'event 1', date: '2025-08-25' },
        { title: 'event 2', date: '2025-08-26' }
      ]}
      height="650px"
    />
      </div>
  );
}
