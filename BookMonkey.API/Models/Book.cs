using System;
using System.Collections.Generic;

namespace BookMonkey.API.Models
{
    public class Book
    {
        public string isbn { get; set; }
        public string title { get; set; }
        public List<string> authors { get; set; }
        public DateTime published { get; set; }
        public string subtitle { get; set; }
        public int rating { get; set; }
        public List<Thumbnail> thumbnails { get; set; }
        public string description { get; set; }

    }
}