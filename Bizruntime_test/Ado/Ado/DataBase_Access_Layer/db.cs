using System;

using System.Collections.Generic;

using System.Linq;

using System.Web;

using System.Data;

using System.Data.SqlClient;

using System.Configuration;

namespace Ado.database_Access_Layer

{

    public class db

    {

        SqlConnection con = new SqlConnection(@"Data Source = DESKTOP - 4EEFVUL\SQLEXPRESS; Initial Catalog = DB; User ID = sa; Password=12345");



        public DataSet GetName(string prefix)

        {

            SqlCommand com = new SqlCommand("Select * from tbl_registration where Name like '%'+@prefix+'%'", con);

            com.Parameters.AddWithValue("@prefix", prefix);

            DataSet ds = new DataSet();

            SqlDataAdapter da = new SqlDataAdapter(com);

            da.Fill(ds);

            return ds;

        }

    }

}