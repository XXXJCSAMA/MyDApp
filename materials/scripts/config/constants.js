/**
 * 配置常量
 * Configuration constants
 */

// 目录路径配置
const DIRECTORIES = {
    REGISTRATION: '../../../registration',
    SUBMISSION: '../../../submission',
    SCRIPTS: __dirname
};

// 文件名配置
const FILE_NAMES = {
    README: '../../README.md',
    HACKATHON_INFO: 'HACKATHON.md'
};

// 字段名配置
const FIELD_NAMES = {
    // 注册字段
    REGISTRATION: {
        NAME: 'Name[姓名]',
        CONTACT_METHOD: 'ContactMethod[联系方式]',
        WANTS_TEAM: 'WantsTeam[组队意愿（是/否）]',
        COMMENT: 'Comment[备注]'
    },
    // 项目提交字段
    SUBMISSION: {
        NAME: 'Name[姓名]',
        PROJECT_NAME: 'ProjectName[项目名称]',
        GITHUB_USER: 'GithubUser[Github用户名]',
        PROJECT_DESCRIPTION: 'ProjectDescription[项目描述]',
        PROJECT_MEMBERS: 'ProjectMembers[项目成员]',
        WALLET_ADDRESS: 'WalletAddress[钱包地址]'
    }
};

// Git 相关配置
const GIT_CONFIG = {
    USER_EMAIL: 'action@github.com',
    USER_NAME: 'GitHub Action'
};

// GitHub 相关配置
const GITHUB_CONFIG = {
    REPO_URL: 'https://github.com/CasualHackathon/MyFirstDapp', // TODO: 替换为实际仓库地址
    ISSUE_TITLE_PREFIXES: {
        REGISTRATION: 'Registration',
        SUBMISSION: 'Submission'
    }
};

// README 更新标记
const README_MARKERS = {
    REGISTRATION: {
        START: '<!-- Registration star -->',
        END: '<!-- Registration end -->'
    },
    SUBMISSION: {
        START: '<!-- Submission start -->',
        END: '<!-- Submission end -->'
    }
};

// 状态指示符
const STATUS_INDICATORS = {
    NOT_SUBMITTED: '⚪',
    SUBMITTED: '🟢'
};

module.exports = {
    DIRECTORIES,
    FILE_NAMES,
    FIELD_NAMES,
    GIT_CONFIG,
    GITHUB_CONFIG,
    README_MARKERS,
    STATUS_INDICATORS
};