# Sidebar Usage Examples

## Available Parameters

- `showProfile` - 顯示網站資訊區塊
- `showPopularTags` - 顯示熱門標籤區塊  
- `showSubscribe` - 顯示訂閱區塊
- `showLatestPosts` - 顯示最新文章區塊
- `showRelatedPosts` - 顯示相關文章區塊 (需要在文章頁面使用)
- `sticky` - 是否讓 sidebar 固定在頂部

## Usage Examples

### 首頁 sidebar (index.hbs)
```handlebars
{{> "components/sidebar" 
    showProfile=true 
    showPopularTags=true 
    showSubscribe=true 
    showLatestPosts=false
}}
```

### 文章頁面 sidebar (post.hbs)
```handlebars
{{> "components/sidebar" 
    showProfile=false
    showPopularTags=false
    showSubscribe=true
    showLatestPosts=true
    showRelatedPosts=true
    sticky=true
}}
```

### 標籤頁面 sidebar (tag.hbs)
```handlebars
{{> "components/sidebar" 
    showProfile=true
    showPopularTags=true
    showSubscribe=true
    showLatestPosts=true
    showRelatedPosts=false
}}
```

### 作者頁面 sidebar (author.hbs)
```handlebars
{{> "components/sidebar" 
    showProfile=true
    showPopularTags=false
    showSubscribe=true
    showLatestPosts=true
    showRelatedPosts=false
}}
```

### 最小 sidebar (只顯示訂閱)
```handlebars
{{> "components/sidebar" 
    showSubscribe=true
}}
```

## Notes

- 只有設為 `true` 的參數對應的區塊才會顯示
- `showRelatedPosts` 只在有文章 context 時有效 (post.hbs)
- `sticky=true` 會讓 sidebar 在滾動時固定在頂部
- 所有參數都是可選的，不傳參數則不顯示任何區塊