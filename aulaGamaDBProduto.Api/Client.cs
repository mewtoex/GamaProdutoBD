using System.Security.Claims;
using System.Security.Cryptography.X509Certificates;
using System.ServiceModel;
using System.Web.Mvc;

namespace GamaProdutoBD.Api
{
    public class Client
    {
        public class OrgEndpointIdentity : EndpointIdentity
        {
            private string orgClaim;
            public OrgEndpointIdentity(string orgName)
            {
                orgClaim = orgName;
            }
            public string OrganizationClaim
            {
                get { return orgClaim; }
                set { orgClaim = value; }
            }
        }

    }
}
