using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.Helpers
{
    public static class Helper
    {
        //Generate code
        public static string GenerateCode(DateTime dateTime, long id)
        {
            string day = ConverIntToString(dateTime.Day);
            string month = ConverIntToString(dateTime.Month);
            string hour = ConverIntToString(dateTime.Hour);
            string minute = ConverIntToString(dateTime.Minute);
            string code = day + month + dateTime.Year.ToString() + hour + minute + "GG" + id.ToString();
            return code;
        }

        public static string ConverIntToString(int input)
        {
            string output = "";
            if (input < 10)
                output = "0" + input.ToString();
            else output = input.ToString();
            return output;
        }
    }
}
