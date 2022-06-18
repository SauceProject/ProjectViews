﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ITI.Sauce.Models
{
    public class Restaurant
    {
        public int ID { get; set; }
        public DateTime WorkTime { get; set; }
        public int Vendor_ID { get; set; }
        public string NameEN { get; set; }
        public string NameAR { get; set; }
        public DateTime RegisterDate { get; set; }
        public bool IsDeleted { get; set; }
        public Vendor Vendor { get; set; }
        public List<Location> Locations { get; set; }
        public List<Restaurant_Phones> Restaurant_Phones{ get; set; }
    }
}
