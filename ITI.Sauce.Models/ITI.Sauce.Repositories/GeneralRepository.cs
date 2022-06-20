using ITI.Sauce.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ITI.Sauce.Repositories
{
    public class GeneralRepository<T> where T:class
    {
        private readonly DBContext dbContext;
        private DbSet<T> Set;
        public GeneralRepository()
        {
            dbContext = new DBContext();
            Set = dbContext.Set<T>();
        }

        public IQueryable<T> Get(Expression<Func<T, bool>> filter = null, string orderBy = null, bool isAscending = false
                    , int pageIndex = 1, int pageSize = 20
            , params string[] includProps)
        {
            var query = Set.AsQueryable();
            foreach (string prop in includProps)
                query = query.Include(prop);
            if (filter != null)
                query = query.Where(filter);
            if (orderBy != null)
                query = query.OrderBy(orderBy, isAscending);
            int rowsCount = query.Count();
            if (rowsCount < pageSize)
                pageIndex = 1;
            if (pageIndex <= 0)
                pageIndex = 1;
            int excludedRowsCount = (pageIndex - 1) * pageSize;
            query = query.Skip(excludedRowsCount).Take(pageSize);
            return query;
        }

        public IQueryable<T> GetList()
        {
            return Set.AsQueryable();
        }
        public IQueryable<T> GetByID(int ID)
        {
            return Set.AsQueryable().Where(e => e.Equals(ID));
        }
    }
}
