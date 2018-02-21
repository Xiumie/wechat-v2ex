'use strict';
var HOST_URI = 'https://www.v2ex.com/api/';

// 获取节点
// 所有的节点
var ALL_NODE = 'nodes/all.json';
// 获取节点信息 -> 获得指定节点的名字，简介，URL 及头像图片的地址
// 节点id :id 节点名 :name
var NODE_INFO = 'nodes/show.json';

// 获取主题
// 获取最新主题 -> 相当于首页的“全部”这个 tab 下的最新内容
var LATEST_TOPIC = 'topics/latest.json';
// 获取最热主题 -> 相当于首页右侧的 10 大每天的内容
var HOT_TOPIC = 'topics/hot.json';
// 获取主题信息  :id | (:username | :node_id | :node_name)
var GET_TOPICS = 'topics/show.json';

// 获取回复 :topic_id (:page , :page_size)?
var GET_REPLIES = 'replies/show.json';


// 获取用户信息 -> 获得指定用户的自我介绍，及其登记的社交网站信息
// 接受以下参数 -> username: 用户名 id: 用户在 V2EX 的数字 ID
var GET_USERINFO = 'members/show.json';

function _obj2uri(obj){
	return Object.keys(obj).map(function(k) {
		return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
	}).join('&');
}


function _getAllNode(){
	return HOST_URI+ALL_NODE;
}

function _getNodeInfo(o){
	return HOST_URI+NODE_INFO+'?'+_obj2uri(o);
}

function _getTopicInfo(o) {
	return HOST_URI+GET_TOPICS+'?'+_obj2uri(o);
} 

function _getLatestTopic(o){
	return HOST_URI+LATEST_TOPIC+'?'+_obj2uri(o);
}

function _getHotestTopic(o) {
	return HOST_URI+HOT_TOPIC+'?'+_obj2uri(o);
}

function _getReplies(o){
	return HOST_URI+GET_REPLIES+'?'+_obj2uri(o);
}

module.exports = {
	getAllNode: _getAllNode,
	getNodeInfo: _getNodeInfo,
	getLatestTopic: _getLatestTopic,
	getHotestTopic: _getHotestTopic,
	getTopicInfo: _getTopicInfo,
	getReplies: _getReplies
};