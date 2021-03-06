import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './img/lunbo1.jpg';
import qrcode from './img/qrcode.jpeg';
import { Carousel } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <nav className="header">
        <div className="header_top w">
            <div className="logo">
                <a className="" href="#"></a>
            </div>

            <div className="search">
                <form className="form-inline search">
                    <input className="form-control" type="text" placeholder="请输入想搜索的内容"/>
                </form>
            </div>
        </div>
      </nav>

      <div className="nav w container-md">
        <ul className="row">
            <li className="nav_item col"><a href="">学院首页</a></li>
            <li className="nav_item col"><a href="">学院概况</a>
                <div className="nav_item_sub">
                    <a href="">学院简介</a>
                    <a href="">历史沿革</a>
                    <a href="">机构设置</a>
                    <a href="">历任领导</a>
                    <a href="">学术委员会</a>
                </div>
            </li>
            <li className="nav_item col"><a href="">人才培养</a>
                <div className="nav_item_sub">
                    <a href="">本科教学</a>
                    <a href="">研究生教学</a>
                    <a href="">继续教学</a>
                    <a href="">国际交流</a>
                </div>
            </li>
            <li className="nav_item col"><a href="">科学研究</a>
                <div className="nav_item_sub">
                    <a href="">科学风貌</a>
                    <a href="">研究机构</a>
                    <a href="">科研成果</a>
                    <a href="">学术交流</a>
                </div>
            </li>
            <li className="nav_item col"><a href="">招生就业</a>
                <div className="nav_item_sub">
                    <a href="">招生信息</a>
                    <a href="">专业介绍</a>
                    <a href="">招聘信息</a>
                    <a href="">职业规划</a>
                    <a href="">创新创业</a>
                </div>
            </li>
            <li className="nav_item col"><a href="">学生工作</a>
                <div className="nav_item_sub">
                    <a href="">通知公告</a>
                    <a href="">团学动态</a>
                    <a href="">学生组织</a>
                    <a href="">学生风采</a>
                </div>
            </li>
            <li className="nav_item col"><a href="">党建工作</a>
                <div className="nav_item_sub">
                    <a href="">党建巡礼</a>
                    <a href="">支部风采</a>
                    <a href="">学习参考</a>
                    <a href="">管理制度</a>
                </div>
            </li>
            <li className="nav_item col"><a href="">师资队伍</a>
                <div className="nav_item_sub">
                    <a href="">教授风采</a>
                    <a href="">骨干教师</a>
                    <a href="">行政人员</a>
                    <a href="">学院领导</a>
                    <a href="">硕导风采</a>
                    <a href="">行业导师</a>
                </div>
            </li>
            <li className="nav_item col"><a href="">新闻动态</a></li>
            <li className="nav_item col"><a href="">校友之家</a>
                <div className="nav_item_sub">
                    <a href="">校友名录</a>
                    <a href="">校友通讯</a>
                </div>
            </li>
        </ul>
    </div>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    <div className="news">
      <div className="content">
        <div style={{display: 'inline-block'}}>
          <div className="custom_h1">学院新闻</div>
          <div className="line_B"></div>
        </div>
        <div className="line"/>
        <div className="more">
          更多 >
        </div>
      </div>
    </div>

    <footer className="footer">
        <div className="footer_bottom w ">
            <div className="footer_left">
                <div className="footer_qrcode">
                    <div className="footer_qrcode_img">
                        <img src={qrcode} alt="" width="100%" />
                    </div>
                    <div className="footer_qrcode_title">
                        <p>关注我们</p>
                    </div>
                </div>
                <div className="footer_qrcode">
                    <div className="footer_qrcode_img">
                        <img src={qrcode} alt="" width="100%" />
                    </div>
                    <div className="footer_qrcode_title">
                        <p>关注我们</p>
                    </div>
                </div>
            </div>
            <div className="footer_center">
                <div className="footer_center_box">
                    <div className="footer_logo">
                        <a className="" href="#"></a>
                    </div>
                    <div className="footer_info">
                        <div className="tel">
                            <p>电话：0571-28860733 传真：0571-28860733</p>
                        </div>
                        <div className="mail">
                            <p>邮箱：jjyglxyhznu@163.com 邮编：311121</p>
                        </div>
                        <div className="address">
                            <p>地址：浙江省杭州市余杭区仓前街道余杭塘路2318号恕园1号楼7楼</p>
                        </div>
                        <div className="copyright">
                            <p>浙ICP备11056902号 版权所有©2013 杭州师范大学经济与管理学院</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_right">
                <div className="footer_right_box">
                    <div className="yqlj">
                        <h3>友情链接</h3>
                        <ul>
                            <li><a href="">图书馆</a></li>
                            <li><a href="">教务处</a></li>
                            <li><a href="">人事处</a></li>
                            <li><a href="">人文社科处</a></li>
                            <li><a href="">计划财务处</a></li>
                        </ul>
                    </div>
                    <div className="cylj">
                        <h3>常用链接</h3>
                        <ul>
                            <li><a href="http://gotrip.zjol.com.cn/">浙江旅游新闻网</a></li>
                            <li><a href="http://hzjlly.hznu.edu.cn/">首届杭州奖励旅游产品创意策划大赛官网</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
