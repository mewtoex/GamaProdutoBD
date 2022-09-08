using aulaGamaDBProduto.Api.Util;
using aulaGamaDBProduto.Dao ;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http.Description;
using System.Web.Http.Results;
using GamaProdutoBD;

namespace aulaGamaDBProduto.Api.Controllers
{
    [Route("api/produto")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        [HttpPost]
        [Route("persitirProduto")]
        public ActionResult<object> persitirProduto(produto lProduto)
        {
            try
            {
                util Utils = new util();
                Utils.persitirProduto(lProduto);
                return Ok(lProduto);

            }
            catch (Exception ex)
            {
                return Ok(ex.Message);

            }

        }

        [HttpGet]
        [Route("ConsultarAllProduto")]
        public ActionResult<object> ConsultarAllProduto()
        {
            try
            {
                util Utils = new util();
                var lResult = Utils.ConsultarAllProduto();
                return Ok(lResult);

            }
            catch (Exception ex)
            {
                return Ok(ex.Message);

            }

        }


        [HttpPost]
        [Route("ConsultarProduto")]
        public ActionResult<object> ConsultarProduto(int id = 0)
        {
            try
            {
                util Utils = new util();
                if(id == 0)
                    return Ok(Utils.ConsultarAllProduto());

                else
                    return Ok(Utils.ConsultarProduto(id));

            }
            catch (Exception ex)
            {
                return Ok(ex.Message);

            }

        }

        [HttpPost]
        [Route("ApagarProduto")]
        public ActionResult<object> ApagarProduto(produto lProduto)
        {
            try
            {
                util Utils = new util();
                return Ok(Utils.ApagarProduto(lProduto));

            }
            catch (Exception ex)
            {
                return Ok(ex.Message);

            }

        }

    }
}
