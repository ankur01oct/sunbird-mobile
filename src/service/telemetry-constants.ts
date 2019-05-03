export enum Environment {
    HOME = 'home',
    COURSE = 'course',
    LIBRARY = 'library',
    USER = 'user',
    SETTINGS = 'settings',
    ONBOARDING = 'onboarding'
}

export enum ErrorCode {
    ERR_DOWNLOAD_FAILED = 'ERR_DOWNLOAD_FAILED'
}

export enum ErrorType {
    SYSTEM = 'SYSTEM'
}

export enum ObjectType {
    NOTIFICATION = 'notification',
    USER = 'User',
    GROUP = 'Group',
    CONTENT = 'Content',
    QUESTION = 'Question'
}
export enum Mode {
    PLAY = 'play'
}
export enum PageId {
    SPLASH_SCREEN = 'splash',
    LOGIN = 'login',
    LOGOUT = 'logout',
    SIGNUP = 'signup',
    ONBOARDING = 'onboarding',
    USER_TYPE_SELECTION = 'user-type-selection',
    HOME = 'home',
    COURSES = 'courses',
    LIBRARY = 'library',
    GROUPS = 'groups',
    PROFILE = 'profile',
    COURSE_PAGE_FILTER = 'course-page-filter',
    LIBRARY_PAGE_FILTER = 'library-page-filter',
    COURSE_DETAIL = 'course-detail',
    COLLECTION_DETAIL = 'collection-detail',
    ENROLLED_COURSE_DETAIL = 'enrolled-course-detail',
    CONTENT_DETAIL = 'content-detail',
    COURSE_BATCHES = 'course-batches',
    SHARE_CONTENT = 'share-content',
    FLAG_CONTENT = 'flag-content',
    CONTENT_RATING = 'content-rating',
    ANNOUNCEMENT_LIST = 'announcement-list',
    ANNOUNCEMENT_DETAIL = 'announcement-detail',
    SHARE_ANNOUCEMENT = 'share-announcement',
    QRCodeScanner = 'qr-code-scanner',
    SERVER_NOTIFICATION = 'server-notifiaction',
    LOCAL_NOTIFICATION = 'local-notifiaction',
    NOTIFICATION_LIST = 'notifiaction-list',
    SIGNIN_OVERLAY = 'signin-overlay',
    SETTINGS = 'settings',
    SETTINGS_LANGUAGE = 'settings-language',
    SETTINGS_DATASYNC = 'settings-datasync',
    SETTINGS_DEVICE_TAGS = 'settings-device-tags',
    SETTINGS_SUPPORTS = 'settings-supports',
    SETTINGS_ABOUT_US = 'settings-about-us',
    ABOUT_APP = 'about-app',
    USERS_GROUPS = 'users-groups',
    CREATE_USER = 'create-profile',
    CREATE_GROUP = 'create-group',
    CREATE_GROUP_SYLLABUS_CLASS = 'create-group-syllabusclass',
    CREATE_GROUP_USER_SELECTION = 'create-group-userselection',
    GROUP_DETAIL = 'group-detail',
    GUEST_PROFILE = 'guest-profile',
    EDIT_USER = 'edit-user',
    EDIT_GROUP = 'edit-group',
    ADD_GROUP_SYLLABUS_CLASS = 'add-group-syllabusclass',
    ADD_GROUP_USER_SELECTION = 'add-group-userselection',
    REMOVE_USERS_FROM_GROUP = 'remove-users-from-group',
    SHARE_USER_GROUP = 'share-user-group',
    REPORTS_USER_GROUP = 'reports-users-group',
    REPORTS_ASSESMENT_CONTENT_LIST = 'assesment-content-list',
    REPORTS_USER_ASSESMENT_DETAILS = 'user-assesment-details',
    REPORTS_GROUP_ASSESMENT_DETAILS = 'group-assesment-details',
    ONBOARDING_LANGUAGE_SETTING = 'onboarding-language-setting',
    VIEW_MORE = 'view-more',
    DIAL_CODE_SCAN_RESULT = 'dial-code-scan-result',
    ONBOARDING_PROFILE_PREFERENCES = 'profile-settings',
    ONBOARDING_QR_SHOWCASE = 'onboarding-qr-showcase',
    SEARCH = 'search',
    DOWNLOAD_SPINE = 'download-spine',
    DIAL_NOT_LINKED = 'dial-not-linked',
    DIAL_LINKED_NO_CONTENT = 'dial-linked-but-no-content',
    TERMS_N_CONDITIONS = 'terms-n-conditions',
    TERMS_N_CONDITIONS_STATIC_PAGE = 'terms-n-conditions-static-page',
    APP_RATING = 'app-rating'
}
export enum LogType {
    NOTIFICATION = 'notification'
}
export enum LogLevel {
    TRACE = 'TRACE',
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
    FATAL = 'FATAL'
}

export enum ImpressionType {
    SEARCH = 'search',
    LIST = 'list',
    DETAIL = 'detail',
    VIEW = 'view',
    EDIT = 'edit',
    WORKFLOW = 'workflow'
}
export enum ImpressionSubtype {
    QRCodeScanInitiate = 'qr-code-scan-initiate',
    RATING_POPUP = 'rating-popup',
    QR_CODE_VALID = 'qr-code-valid',
    INVALID_QR_CODE = 'invalid-qr-code',
    APP_RATING_POPUP = 'app-rating-popup'
}
export enum InteractType {
    TOUCH = 'TOUCH',
    OTHER = 'OTHER',
    SCROLL = 'SCROLL'
}

export enum InteractSubtype {
    NETWORK_STATUS = 'networkStatus',
    INTERNET_CONNECTED = 'internet-connected',
    INTERNET_DISCONNECTED = 'internet-disconnected',
    LOGIN_INITIATE = 'login-initiate',
    LOGIN_SUCCESS = 'login-success',
    SIGNUP_INITIATE = 'signup-initiate',
    LOGOUT_INITIATE = 'logout-initiate',
    LOGOUT_SUCCESS = 'logout-success',
    BROWSE_AS_GUEST_CLICKED = 'browse-as-guest-clicked',
    CONTINUE_CLICKED = 'continue-clicked',
    TAB_CLICKED = 'tab-clicked',
    SECTION_VIEWED = 'section-viewed',
    CONTENT_CLICKED = 'content-clicked',
    CANCEL = 'cancel',
    SEARCH_BUTTON_CLICKED = 'search-button-clicked',
    FILTER_BUTTON_CLICKED = 'filter-button-clicked',
    VIEWALL_CLICKED = 'view-all-clicked',
    BOOK_LIST_END_REACHED = 'book-list-end-reached',
    RECENTLY_VIEWED_END_REACHED = 'recently-viewed-end-reached',
    SHARE_COURSE_INITIATED = 'share-course-initiated',
    SHARE_LIBRARY_INITIATED = 'share-library-initiated',
    SHARE_COURSE_SUCCESS = 'share-course-success',
    SHARE_LIBRARY_SUCCESS = 'share-library-success',
    FLAG_INITIATE = 'flag-initiated',
    FLAG_SUCCESS = 'flag-success',
    FLAG_FAILED = 'flag-failed',
    CONTENT_PLAY = 'content-play',
    QRCodeScanClicked = 'qr-code-scanner-clicked',
    QRCodeScanSuccess = 'qr-code-scan-success',
    QRCodeScanCancelled = 'qr-code-scan-cancelled',
    NOTIFICATION_CLICKED = 'notification-clicked',
    ANNOUNCEMENT_CLICKED = 'announcement-clicked',
    SIGNIN_OVERLAY_CLICKED = 'signin-overlay-clicked',
    SETTINGS_CLICKED = 'settings-clicked',
    LANGUAGE_CLICKED = 'language-clicked',
    DATA_SYNC_CLICKED = 'data-sync-clicked',
    DEVICE_TAGS_CLICKED = 'device-tags-clicked',
    SUPPORT_CLICKED = 'support-clicked',
    ABOUT_APP_CLICKED = 'about-app-clicked',
    SHARE_APP_CLICKED = 'share-app-clicked',
    SHARE_APP_INITIATED = 'share-app-initiated',
    SHARE_APP_SUCCESS = 'share-app-success',
    LANGUAGE_SETTINGS_SUCCESS = 'language-settings-success',
    MANUALSYNC_INITIATED = 'manualsync-initiated',
    MANUALSYNC_SUCCESS = 'manualsync-success',
    DATA_SYNC_TYPE = 'data-sync-type-clicked',
    RATING_CLICKED = 'rating-clicked',
    RATING_SUBMITTED = 'rating-submitted',
    CREATE_USER_CLICKED = 'create-user-clicked',
    CREATE_USER_INITIATED = 'create-user-initated',
    EDIT_USER_INITIATED = 'edit-user-initated',
    CREATE_USER_SUCCESS = 'create-user-success',
    EDIT_USER_SUCCESS = 'edit-user-success',
    CREATE_GROUP_CLICKED = 'create-group-clicked',
    CREATE_GROUP_INITIATED = 'create-group-initated',
    CREATE_GROUP_SUCCESS = 'create-group-success',
    EDIT_GROUP_INITIATED = 'edit-group-initated',
    EDIT_GROUP_SUCCESS = 'edit-group-success',
    SWITCH_USER_CLICKED = 'switch-user-clicked',
    SWITCH_USER_INITIATE = 'switch-user-initiate',
    SWITCH_USER_SUCCESS = 'switch-user-success',
    DELETE_USER_INITIATE = 'delete-user-initiate',
    DELETE_GROUP_INITIATE = 'delete-group-initiate',
    SHARE_USER_GROUP_INITIATE = 'share-usergroup-initiate',
    SHARE_USER_GROUP_SUCCESS = 'share-usergroup-success',
    USER_GROUP_CLICKED = 'users-groups-clicked',
    REPORTS_CLICKED = 'reports-clicked',
    USERS_TAB_CLICKED = 'users-tab-clicked',
    GROUPS_TAB_CLICKED = 'groups-tab-clicked',
    USER_CLICKED = 'user-clicked',
    GROUP_CLICKED = 'group-clicked',
    CLASS_CLICKED = 'class-clicked',
    MEDIUM_CLICKED = 'medium-clicked',
    REPORTS_BY_USER_CLICKED = 'byuser-tab-clicked',
    REPORTS_BY_QUESTION_CLICKED = 'byquestion-tab-clicked',
    REPORTS_SORTBY_QUESTION_CLICKED = 'sortby-question-clicked',
    REPORTS_SORTBY_TIME_CLICKED = 'sortby-time-clicked',
    REPORTS_SORTBY_RESULT_CLICKED = 'sortby-result-clicked',
    REPORTS_SORTBY_USER_CLICKED = 'sortby-users-clicked',
    REPORTS_SORTBY_SCORE_CLICKED = 'sortby-score-clicked',
    REPORTS_SORTBY_MARKS_CLICKED = 'sortby-marks-clicked',
    REPORTS_SORTBY_ACCURACY_CLICKED = 'sortby-accuracy-clicked',
    QUESTION_CLICKED = 'question-clicked',
    INITIAL_CONFIG = 'initial-config',
    FILTER_CONFIG = 'filter-config',
    APPLY_FILTER_CLICKED = 'apply-filter-clicked',
    PROFILE_ATTRIBUTE_CHANGED = 'profile_attribute_changed',
    SAVE_CLICKED = 'save-clicked',
    FINISH_CLICKED = 'finish-clicked',
    DEVICE_BACK_CLICKED = 'device-back-clicked',
    NAV_BACK_CLICKED = 'nav-back-clicked',
    SKIP_CLICKED = 'skip-clicked',
    LANGUAGE_SELECTED = 'language-selected',
    KEBAB_MENU_CLICKED = 'kebab-menu-clicked',
    DELETE_CLICKED = 'delete-clicked',
    DIAL_SEARCH_RESULT_FOUND = 'dial-code-search-result-found',
    LOADING_SPINE = 'loading-spine',
    DOWNLOAD_ALL_CLICKED = 'download-all-clicked',
    CANCEL_CLICKED = 'cancel-clicked',
    CLOSE_CLICKED = 'close-clicked',
    PULL_TO_REFRESH = 'pull-to-refresh',
    EDIT_CLICKED = 'edit-clicked',
    VIEW_MORE_CLICKED = 'view-more-clicked',
    READ_MORE_CLICKED = 'read-more-clicked',
    READ_LESS_CLICKED = 'read-less-clicked',
    DOWNLOAD_PLAY_CLICKED = 'download-play-clicked',
    DOWNLOAD_REPORT_CLICKED = 'download-report-clicked',
    PLAY_CLICKED = 'play-clicked',
    EXTRA_INFO = 'extra-info',
    PROFILE_ATTRIBUTE_POPULATION = 'profile-attribute-population',
    ACCEPTANCE_CHECKBOX_CLICKED = 'acceptance_checkbox_clicked',
    UPDATE_INITIATE = 'update-initiate',
    DOWNLOAD_INITIATE = 'download-initiate',
    PLAY_ONLINE = 'play-online',
    PLAY_FROM_DEVICE = 'play-from-device',
    RESOURCE_PAGE_REQUEST = 'page-request-sent',
    RESOURCE_PAGE_LOADED = 'page-loaded',
    RESOURCE_PAGE_ERROR = 'page-error',
    ENROLL_CLICKED = 'enroll-clicked',
    YES_CLICKED = 'yes-clicked',
    NO_CLICKED = 'no-clicked',
    RESUME_CLICKED = 'resume-clicked',
    PLAY_STORE_BUTTON_CLICKED = 'play-store-clicked',
    HELP_SECTION_CLICKED = 'help-section-clicked',
    RATE_LATER_CLICKED = 'rate-later-clicked',
    APP_RATING_APPEARED = 'app-rating-appeared'
}


