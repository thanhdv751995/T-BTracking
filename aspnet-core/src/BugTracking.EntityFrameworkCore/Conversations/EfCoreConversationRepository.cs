using BugTracking.Conversation;
using BugTracking.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace BugTracking.Conversations
{
    public class EfCoreConversationRepository : EfCoreRepository<BugTrackingDbContext, Conversation.Conversation, Guid>, IConversationRepository
    {
        public EfCoreConversationRepository(
            IDbContextProvider<BugTrackingDbContext> dbContextProvider)
            : base(dbContextProvider)
        {
        }
    }
}
