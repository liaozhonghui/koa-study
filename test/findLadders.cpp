#include <iostream>
#include <map>
#include <vector>
using namespace std;

class Solution {
   public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        // 判断endWord是否在wordList中，不存在直接返回0
        if (!find(wordList, endWord)) return 0;
        vector<string> ans;
        map<string, int> p2;
        ans.push_back(beginWord);
        // 处理整个数据
        if (backs(ans, beginWord, endWord, wordList, p2)) return ans.size();
        return 0;
    }

    // 递归处理
    bool backs(vector<string>& ans, string beginWord, string endWord, vector<string>& wordList, map<string, int>& p2) {
        // terminator
        if (beginWord == endWord) {
            return true;
        }
        // process current logic : 一步一步将beginWord进行改变
        for (string s : wordList) {
            // 判断在单词列表中可以替换一个
            // 使用map进行剪枝
            if (check(beginWord, s) && !find(ans, s) && p2[s] != -1) {
                ans.push_back(s);
                // drill down
                if (backs(ans, s, endWord, wordList, p2)) return true;
                p2[s] = -1;
                ans.erase(ans.end() - 1);
            }
        }
        return false;
    }
    bool check(string& a, string& b) {
        if (a.size() != b.size()) return false;
        int all = 0;
        for (int n = 0; n < a.size(); n++) {
            if (a[n] != b[n]) {
                all++;
                if (all > 1) return false;
            }
        }
        if (all != 1) return false;
        return true;
    }
    // 字符串查找
    bool find(vector<string>& ans, string s) {
        if (ans.empty()) return false;
        for (string a : ans) {
            if (a == s) return true;
        }
        return false;
    }
};